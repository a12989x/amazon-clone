import React, { useState, useEffect, useContext } from 'react';

import { ProductsContext } from '../contexts/ProductsContext';

import Order from '../Order';

const Orders = () => {
    const { orders } = useContext(ProductsContext);

    return (
        <div className='orders'>
            <h1>Your orders ({orders.length} orders)</h1>

            <div className='orders__order'>
                {orders?.map((order, key) => (
                    <Order key={key} order={order} />
                ))}
            </div>
        </div>
    );
};

export default Orders;
