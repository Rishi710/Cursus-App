const Stripe = require('stripe');
const express = require('express');
const app = express();

// dotenv.config({path:'./config.env'});
require('dotenv').config();
const stripe =Stripe(process.env.STRIPE_KEY);

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:4242/success',
      cancel_url: 'http://localhost:4242/cancel',
    });
  
    res.redirect(303, session.url);
  });
  
//   app.listen(4242, () => console.log(`Listening on port ${4242}!`));