import React from 'react';
import { Link } from 'react-router-dom';

import Subtotal from '../Subtotal';

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <Link to='/'>
                    <img
                        className='checkout__imgAd'
                        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                        alt=''
                    />
                </Link>

                <h2 className='checkout__title'>Your shopping basket</h2>
            </div>

            <div className='checkout__right'>
                <h3>The subtotal will go here</h3>
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
