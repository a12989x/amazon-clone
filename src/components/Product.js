import React from 'react';

import { useStateValue } from './store/StateContext';

const Product = ({ id, title, price, rating, imgUrl }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                imgUrl,
                price,
                rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>&#36;</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    <span role='img' aria-label='star'>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <span
                                    key={i}
                                    aria-label='dollar sign'
                                    role='img'
                                >
                                    &#11088;
                                </span>
                            ))}
                    </span>
                </div>
            </div>

            <img className='product__img' src={imgUrl} alt='product' />
            <button onClick={addToBasket} className='product__btn'>
                Add to Basket
            </button>
        </div>
    );
};

export default Product;
