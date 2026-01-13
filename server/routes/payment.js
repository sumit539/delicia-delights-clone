const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create Razorpay order
router.post('/orders/create', orderController.createOrder);

// Verify Razorpay payment
router.post('/orders/verify', orderController.verifyPayment);

// Webhook for payment notifications (optional)
router.post('/webhook', orderController.handleWebhook);

// Get order details
router.get('/orders/:orderId', orderController.getOrder);

module.exports = router;
