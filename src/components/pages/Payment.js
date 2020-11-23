import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

import History from '../History';
import { db } from '../../firebase';
import { AuthContext } from '../contexts/AuthContext';
import { ProductsContext } from '../contexts/ProductsContext';
import { PaymentContext } from '../contexts/PaymentContext';

import Product from '../Product';

const Payment = () => {
    const { user, username } = useContext(AuthContext);
    const { basket, getBasketTotal, setBasket } = useContext(ProductsContext);
    const {
        error,
        setError,
        disabled,
        succeeded,
        setSucceeded,
        processing,
        setProcessing,
        clientSecret,
        handleChange,
    } = useContext(PaymentContext);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                db.collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id)
                    .set({
                        basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created,
                    });

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                setBasket([]);

                History.replace('/orders');
            });
    };

    return (
        <div className='payment'>
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>
            <div className='payment__section'>
                <h3 className='payment__title'>Delivery Address</h3>
                <div className='payment__address'>
                    <p>{username}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>

            <div className='payment__section'>
                <h3 className='payment__title'>Review items and delivery</h3>
                <div className='payment__items'>
                    {basket.map((item, key) => (
                        <Product key={key} {...item} />
                    ))}
                </div>
            </div>

            <div className='payment__section'>
                <h3 className='payment__title'>Payment Method</h3>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                            <button
                                type='submit'
                                disabled={processing || disabled || succeeded}
                            >
                                {processing ? 'Processing' : 'Buy Now'}
                            </button>
                        </div>

                        {error && <p>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;
