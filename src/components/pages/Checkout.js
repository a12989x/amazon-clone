import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../store/StateContext';

import CheckoutProduct from '../CheckoutProduct';
import Subtotal from '../Subtotal';

const Checkout = () => {
    const [{ basket, user }] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <Link to='/'>
                    <img
                        className='checkout__imgAd'
                        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                        alt='amazon logo'
                    />
                </Link>

                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>Your shopping basket</h2>
                {basket.map((item, key) => (
                    <CheckoutProduct key={key} {...item} />
                ))}
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
