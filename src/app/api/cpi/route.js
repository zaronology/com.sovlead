import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    // In a real app, calculate the amount securely on the server
    // to prevent users from manipulating the price in the JSON.
    // Amount is in CENTS (e.g., $500.00 = 50000)
    const { amount } = await request.json(); 

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, 
      currency: "usd",
      // "automatic_payment_methods" enables Apple Pay, Google Pay, etc.
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}