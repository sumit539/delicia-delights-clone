const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.warn('⚠️  Email credentials not configured. Skipping email sending.');
        return null;
    }

    return nodemailer.createTransporter({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: process.env.EMAIL_PORT || 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
};

// Send order confirmation email
exports.sendOrderConfirmation = async (customerInfo, orderData) => {
    const transporter = createTransporter();

    if (!transporter) {
        return; // Skip if email not configured
    }

    try {
        const itemsList = orderData.items
            .map(item => `
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name} (${item.selectedSize})</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${item.price}</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
            `)
            .join('');

        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #D4302E; color: white; padding: 20px; text-align: center; }
                    .content { padding: 20px; background-color: #f9f9f9; }
                    .order-details { background-color: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
                    table { width: 100%; border-collapse: collapse; }
                    .total-row { font-weight: bold; background-color: #f0f0f0; }
                    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Order Confirmation</h1>
                        <p>Thank you for your purchase!</p>
                    </div>
                    
                    <div class="content">
                        <h2>Hi ${customerInfo.name},</h2>
                        <p>Your order has been successfully placed and confirmed. Here are your order details:</p>
                        
                        <div class="order-details">
                            <h3>Order #${orderData.orderId}</h3>
                            <p><strong>Order Date:</strong> ${new Date(orderData.createdAt).toLocaleDateString('en-IN')}</p>
                            
                            <h3>Items Ordered:</h3>
                            <table>
                                <thead>
                                    <tr style="background-color: #D4302E; color: white;">
                                        <th style="padding: 10px; text-align: left;">Product</th>
                                        <th style="padding: 10px; text-align: center;">Quantity</th>
                                        <th style="padding: 10px; text-align: right;">Price</th>
                                        <th style="padding: 10px; text-align: right;">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${itemsList}
                                    <tr class="total-row">
                                        <td colspan="3" style="padding: 15px; text-align: right;">Total:</td>
                                        <td style="padding: 15px; text-align: right; color: #D4302E; font-size: 18px;">₹${orderData.total.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <h3>Shipping Address:</h3>
                            <p>
                                ${customerInfo.name}<br>
                                ${customerInfo.address}<br>
                                ${customerInfo.city}, ${customerInfo.state} - ${customerInfo.pincode}<br>
                                Phone: ${customerInfo.phone}<br>
                                Email: ${customerInfo.email}
                            </p>
                            
                            <h3>Payment Information:</h3>
                            <p>
                                <strong>Payment ID:</strong> ${orderData.razorpayPaymentId}<br>
                                <strong>Status:</strong> <span style="color: green;">Paid</span>
                            </p>
                        </div>
                        
                        <p><strong>What's Next?</strong></p>
                        <ul>
                            <li>Your order is being processed</li>
                            <li>You'll receive a shipping confirmation once your order is dispatched</li>
                            <li>Estimated delivery: 3-5 business days</li>
                        </ul>
                        
                        <p>If you have any questions, please don't hesitate to contact us at <a href="mailto:deepak@deliciadelights.com">deepak@deliciadelights.com</a> or call <a href="tel:+919876543210">+91 98765 43210</a>.</p>
                    </div>
                    
                    <div class="footer">
                        <p>© 2026 Delicia Delights. All rights reserved.</p>
                        <p>Thank you for shopping with us!</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        const mailOptions = {
            from: process.env.EMAIL_FROM || '"Delicia Delights" <noreply@deliciadelights.com>',
            to: customerInfo.email,
            subject: `Order Confirmation - ${orderData.orderId}`,
            html: htmlContent
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Order confirmation email sent to:', customerInfo.email);
    } catch (error) {
        console.error('❌ Failed to send email:', error);
        throw error;
    }
};
