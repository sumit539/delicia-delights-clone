const Razorpay = require('razorpay');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { sendOrderConfirmation } = require('../utils/email');

// Initialize Razorpay (only if credentials are provided)
let razorpay = null;
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
    razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    });
    console.log('✅ Razorpay initialized successfully');
} else {
    console.warn('⚠️  Razorpay credentials not found in environment variables.');
    console.warn('⚠️  Please configure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in server/.env');
    console.warn('⚠️  Server will run but payments will not work until configured.');
}


// Path to orders file
const ordersFilePath = path.join(__dirname, '../data/orders.json');

// Helper function to read orders
const readOrders = () => {
    try {
        if (!fs.existsSync(ordersFilePath)) {
            fs.writeFileSync(ordersFilePath, JSON.stringify([]));
            return [];
        }
        const data = fs.readFileSync(ordersFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading orders:', error);
        return [];
    }
};

// Helper function to write orders
const writeOrders = (orders) => {
    try {
        fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
    } catch (error) {
        console.error('Error writing orders:', error);
    }
};

// Create Razorpay Order
exports.createOrder = async (req, res) => {
    try {
        const { amount, currency, customerInfo, items } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount' });
        }

        if (!razorpay) {
            return res.status(500).json({
                error: 'Razorpay not configured',
                message: 'Please configure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in server/.env'
            });
        }

        // Create order in Razorpay
        const options = {
            amount: Math.round(amount * 100), // Convert to paise
            currency: currency || 'INR',
            receipt: `receipt_${Date.now()}`,
            notes: {
                customerName: customerInfo?.name || '',
                customerEmail: customerInfo?.email || ''
            }
        };

        const order = await razorpay.orders.create(options);

        console.log('✅ Razorpay order created:', order.id);

        res.json({
            success: true,
            id: order.id,
            amount: order.amount,
            currency: order.currency
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to create order',
            message: error.message
        });
    }
};

// Verify Razorpay Payment
exports.verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            customerInfo,
            items
        } = req.body;

        // Verify signature
        const sign = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest('hex');

        if (razorpay_signature !== expectedSign) {
            return res.status(400).json({
                success: false,
                error: 'Invalid payment signature'
            });
        }

        // Generate order ID
        const orderId = `ORD${Date.now()}`;

        // Calculate total
        const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // Save order to file
        const orderData = {
            orderId,
            razorpayOrderId: razorpay_order_id,
            razorpayPaymentId: razorpay_payment_id,
            customerInfo,
            items,
            total,
            status: 'confirmed',
            createdAt: new Date().toISOString()
        };

        const orders = readOrders();
        orders.push(orderData);
        writeOrders(orders);

        console.log('✅ Payment verified and order saved:', orderId);

        // Send order confirmation email (optional)
        try {
            await sendOrderConfirmation(customerInfo, orderData);
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Don't fail the request if email fails
        }

        res.json({
            success: true,
            orderId,
            message: 'Payment verified successfully'
        });
    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to verify payment',
            message: error.message
        });
    }
};

// Get Order Details
exports.getOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const orders = readOrders();
        const order = orders.find(o => o.orderId === orderId);

        if (!order) {
            return res.status(404).json({
                success: false,
                error: 'Order not found'
            });
        }

        res.json({
            success: true,
            order
        });
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch order',
            message: error.message
        });
    }
};

// Handle Webhook (optional - for production)
exports.handleWebhook = async (req, res) => {
    try {
        const webhookSignature = req.headers['x-razorpay-signature'];
        const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

        if (webhookSecret) {
            const expectedSignature = crypto
                .createHmac('sha256', webhookSecret)
                .update(JSON.stringify(req.body))
                .digest('hex');

            if (webhookSignature !== expectedSignature) {
                return res.status(400).json({ error: 'Invalid webhook signature' });
            }
        }

        const event = req.body.event;
        console.log('Webhook received:', event);

        // Handle different events
        if (event === 'payment.captured') {
            // Payment was successful
            console.log('Payment captured:', req.body.payload.payment.entity.id);
        }

        res.json({ status: 'ok' });
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ error: 'Webhook processing failed' });
    }
};
