const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize Stripe with your secret key
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "success !",
  });
});

// Payment route
app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total, 10); // Ensure `total` is a number
  if (total > 0) {
    try {
      console.log("Payment received", total);

      // Create a PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });

      // Send response
      res.status(201).json(paymentIntent);
      console.log(paymentIntent);
    } catch (error) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({
        error: error.message,
      });
    }
  } else {
    res.status(400).json({
      message: "Total must be greater than 0",
    });
  }
});

// Export the API
exports.api = onRequest(app);
