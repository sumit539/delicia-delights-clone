# Razorpay E-Commerce Integration - Setup Guide

## 🎉 What's Been Added

Your Delicia Delights website now has a complete e-commerce system with:

✅ **Shopping Cart** - Add products, manage quantities, view cart sidebar
✅ **Product Pricing** - All 32 products have pricing based on sizes
✅ **Checkout Flow** - Shipping form and order summary
✅ **Razorpay Payment Gateway** - Secure online payments
✅ **Backend Server** - Order processing and payment verification
✅ **Email Notifications** - Order confirmations sent to customers
✅ **Order Management** - Orders stored in JSON file

---

## 🚀 Quick Start

### Step 1: Get Razorpay API Keys

1. Create a free account at [https://razorpay.com](https://razorpay.com)
2. Go to **Dashboard → Settings → API Keys**
3. Click **Generate Test Keys** (use test mode first)
4. Copy your **Key ID** and **Key Secret**

### Step 2: Configure Backend

1. Open `server/.env` file
2. Replace the placeholders with your actual keys:

```env
RAZORPAY_KEY_ID=rzp_test_YOUR_TEST_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_TEST_KEY_SECRET
```

### Step 3: Configure Frontend

1. Create `.env` file in the root directory (not in server folder)
2. Add your Razorpay Key ID:

```env
REACT_APP_RAZORPAY_KEY_ID=rzp_test_YOUR_TEST_KEY_ID
```

⚠️ **Important**: Never commit real API keys to Git! The `.env` files are already in `.gitignore`.

### Step 4: Start the Application

**Terminal 1 - Backend Server:**
```bash
cd server
npm start
```

You should see:
```
🚀 Server is running on port 5000
📝 Health check: http://localhost:5000/health
💳 Payment API: http://localhost:5000/api/orders/create
```

**Terminal 2 - Frontend (React):**
```bash
npm start
```

Your app will open at [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testing Payments

### Test Mode Cards

Use these test cards in Razorpay test mode:

| Card Number | CVV | Expiry | Result |
|-------------|-----|--------|--------|
| `4111 1111 1111 1111` | Any 3 digits | Any future date | ✅ Success |
| `4012 0010 3714 1112` | Any 3 digits | Any future date | ❌ Failure |

### Test Flow

1. Browse products at `/products`
2. Click **Add to Cart** on any product
3. Open cart sidebar from header icon
4. Click **Proceed to Checkout**
5. Fill in shipping details
6. Click **Pay ₹XXX**
7. Use test card details above
8. Complete payment
9. See order confirmation page

---

## 📁 Project Structure

```
delicia_delights_clone/
├── src/
│   ├── components/
│   │   ├── CartIcon.jsx         # Cart icon with item badge
│   │   └── CartSidebar.jsx      # Slide-in cart panel
│   ├── context/
│   │   └── CartContext.jsx      # Global cart state management
│   ├── pages/
│   │   ├── Products.jsx          # Updated with Add to Cart
│   │   ├── ProductDetail.jsx     # Size selector & quantity
│   │   ├── Checkout.jsx          # Checkout & payment
│   │   └── OrderConfirmation.jsx # Success page
│   └── data/
│       └── mockData.js           # Products with pricing
├── server/
│   ├── controllers/
│   │   └── orderController.js    # Payment logic
│   ├── routes/
│   │   └── payment.js            # API endpoints
│   ├── utils/
│   │   └── email.js              # Email sender
│   ├── data/
│   │   └── orders.json           # Order storage
│   ├── index.js                  # Express server
│   ├── .env                      # API keys (DON'T COMMIT!)
│   └── package.json              # Backend dependencies
└── .env                          # Frontend config
```

---

## 🎨 Features Showcase

### 1. Shopping Cart
- **Header Icon**: Shows cart item count with bounce animation
- **Cart Sidebar**: Slide-in panel with cart items and totals
- **Quantity Controls**: +/- buttons to adjust quantities
- **Persistent**: Cart saved in localStorage across page refreshes

### 2. Product Pages
- **Pricing Display**: Shows "from ₹XXX" for multi-size products
- **Add to Cart**: Replace "Enquire Now" with cart buttons
- **Size Selection**: Choose size before adding (on detail page)
- **Quantity Selector**: Spin buttons with subtotal calculation

### 3. Checkout
- **Shipping Form**: Name, email, phone, address validation
- **Order Summary**: List of items with images and prices
- **Razorpay Integration**: Secure payment modal
- **Error Handling**: User-friendly error messages

### 4. Backend
- **Order Creation**: Generate Razorpay order ID
- **Payment Verification**: Verify signature for security
- **Order Storage**: Save orders to `orders.json`
- **Email Notifications**: HTML email with order details

---

## 📧 Email Configuration (Optional)

To enable order confirmation emails:

1. Use Gmail App Password (recommended):
   ```env
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASSWORD=your_app_password
   ```

2. Enable 2-Factor Authentication on Gmail
3. Generate App Password: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Use that password in `.env`

💡 **Skip for now**: The app works without email. Configure when ready!

---

## 🔐 Going Live (Production)

When ready to accept real payments:

1. **Switch to Live Mode** in Razorpay Dashboard
2. Generate **Live API Keys**
3. Update `.env` files with live keys:
   ```env
   RAZORPAY_KEY_ID=rzp_live_YOUR_LIVE_KEY
   RAZORPAY_KEY_SECRET=YOUR_LIVE_SECRET
   ```
4. Update `REACT_APP_RAZORPAY_KEY_ID` with live key
5. Deploy backend to a server (Heroku, Railway, DigitalOcean)
6. Update `FRONTEND_URL` in backend `.env`
7. Update API URL in `Checkout.jsx` from localhost to your server

---

## 🐛 Troubleshooting

### Cart not loading?
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`

### Payment button not working?
- Ensure backend server is running on port 5000
- Check Razorpay keys in both `.env` files
- Look at browser Network tab for API errors

### Backend crashes?
- Check if port 5000 is already in use
- Verify `.env` file has correct format
- Check `npm install` completed successfully

### Orders not saving?
- Ensure `server/data/orders.json` exists
- Check file permissions

---

## 📊 View Orders

Orders are saved in `server/data/orders.json`. You can:

1. Open the file directly to see all orders
2. Build an admin panel (future enhancement)
3. Export to spreadsheet for analysis

---

## ✨ Next Steps

Consider adding:
- [ ] Coupon codes and discounts
- [ ] Multiple payment methods (UPI, Cards, Wallets)
- [ ] Order tracking
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Product reviews
- [ ] Wishlist feature

---

## 🎓 Learn More

- **Razorpay Docs**: [https://razorpay.com/docs/](https://razorpay.com/docs/)
- **Test Cards**: [https://razorpay.com/docs/payments/payments/test-card-details/](https://razorpay.com/docs/payments/payments/test-card-details/)
- **Webhooks**: [https://razorpay.com/docs/webhooks/](https://razorpay.com/docs/webhooks/)

---

## 💬 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review browser console and server logs
3. Verify all environment variables are set correctly

---

**Happy Selling! 🛒✨**
