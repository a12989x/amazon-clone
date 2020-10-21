import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

import axios from '../../axios';
import { useStateValue } from '../store/StateContext';
import { getBasketTotal } from '../store/reducer';

import CheckoutProduct from '../CheckoutProduct';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                history.replaceState('/orders');
            });
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    };

    return (
        <div className='payment'>
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>
            <div className='payment__section'>
                <h3 className='payment__title'>Delivery Address</h3>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>

            <div className='payment__section'>
                <h3 className='payment__title'>Review items and delivery</h3>
                <div className='payment__items'>
                    {basket.map((item, key) => (
                        <CheckoutProduct key={key} {...item} />
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
