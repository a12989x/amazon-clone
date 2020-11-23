import React, { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';

import { ProductsContext } from './contexts/ProductsContext';
import History from './History';

const Subtotal = () => {
    const { basket, getBasketTotal } = useContext(ProductsContext);

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button
                onClick={(e) => History.push('/payment')}
                className='subtotal__btn'
            >
                Proceed to checkout
            </button>
        </div>
    );
};

export default Subtotal;
