import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from './store/StateContext';
import { getBasketTotal } from './store/reducer';

const Subtotal = () => {
    const history = useHistory();
    const [{ basket }] = useStateValue();

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
                onClick={(e) => history.push('/payment')}
                className='subtotal__btn'
            >
                Proceed to checkout
            </button>
        </div>
    );
};

export default Subtotal;
