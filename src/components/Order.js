import React from 'react';
import moment from 'moment';

import Product from './Product';

const Order = ({ order }) => {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>
                {moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}
            </p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(
                ({ id, title, imgUrl, price, rating }, key) => (
                    <Product
                        id={id}
                        title={title}
                        imgUrl={imgUrl}
                        price={price}
                        rating={rating}
                        key={key}
                        disabled={true}
                    />
                )
            )}
        </div>
    );
};

export default Order;
