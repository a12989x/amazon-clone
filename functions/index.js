const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await functions
        .config()
        .stripe.public_key.paymentIntents.create({
            amount: total,
            currency: 'usd',
        });

    res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);
