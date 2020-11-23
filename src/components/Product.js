import React, { useContext } from 'react';

import { ProductsContext } from './contexts/ProductsContext';

const Product = ({
    id,
    title,
    price,
    rating,
    imgUrl,
    quantity,
    page,
    disabled,
}) => {
    const { addProductToBasket, removeProductFromBasket } = useContext(
        ProductsContext
    );

    const handleClick = () => {
        if (page === 'home')
            addProductToBasket(id, title, price, rating, imgUrl, quantity);
        else removeProductFromBasket(id);
    };

    return (
        <div className={`product product__${page}`}>
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
            {!disabled && (
                <button onClick={handleClick} className='product__btn'>
                    {page === 'home' ? 'Add to' : 'Remove from'} Basket
                </button>
            )}
        </div>
    );
};

export default Product;
