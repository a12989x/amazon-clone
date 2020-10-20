import React from 'react';

import { useStateValue } from './store/StateContext';

const CheckoutProduct = ({ id, imgUrl, title, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id,
        });
    };

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__img' src={imgUrl} alt='product' />

            <div className='checkoutProduct__info'>
                <h4 className='checkoutProduct__title'>{title}</h4>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>

            <div className='product__rating'>
                <span role='img' aria-label='star'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span key={i} aria-label='dollar sign' role='img'>
                                &#11088;
                            </span>
                        ))}
                </span>
            </div>

            <button className='checkoutProduct__btn' onClick={removeFromBasket}>
                Remove from basket
            </button>
        </div>
    );
};

export default CheckoutProduct;
