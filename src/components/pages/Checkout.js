import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import { ProductsContext } from '../contexts/ProductsContext';

import Subtotal from '../Subtotal';
import Product from '../Product';

const Checkout = () => {
    const { user, username } = useContext(AuthContext);
    const { basket } = useContext(ProductsContext);

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

                <h3>Hello, {username}</h3>
                <h2 className='checkout__title'>Your shopping basket</h2>
                {basket.map((item, key) => (
                    <Product key={key} page='checkout' {...item} />
                ))}
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
