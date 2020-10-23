import React, { useState, useEffect, createContext, useContext } from 'react';

import { db } from '../../firebase';
import { AuthContext } from './AuthContext';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const [basket, setBasket] = useState([]);
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (user) {
            db.collection('products').onSnapshot((snapshot) => {
                setProducts(snapshot.docs.map((doc) => doc.data()));
            });
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot((snapshot) =>
                    setOrders(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )
                );
        }
    }, [user]);

    const addProductToBasket = (id, title, price, rating, imgUrl) => {
        const newItemBasket = { id, title, price, rating, imgUrl };
        setBasket((prevState) => [...prevState, newItemBasket]);
    };

    const removeProductFromBasket = (id) => {
        const index = basket.findIndex((basketItem) => basketItem.id === id);
        let newBasket = [...basket];

        if (index >= 0) {
            newBasket.splice(index, 1);
        } else {
            console.warn(
                `Cant remove product (id: ${id} as its not in basket!)`
            );
        }
        setBasket(newBasket);
    };

    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => item.price + amount, 0);

    return (
        <ProductsContext.Provider
            value={{
                basket,
                setBasket,
                orders,
                addProductToBasket,
                removeProductFromBasket,
                products,
                getBasketTotal,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
