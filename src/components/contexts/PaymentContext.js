import React, { useState, useEffect, createContext, useContext } from 'react';

import { ProductsContext } from './ProductsContext';

import axios from '../../axios';

export const PaymentContext = createContext();

const PaymentContextProvider = ({ children }) => {
    const { basket, getBasketTotal } = useContext(ProductsContext);

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        getClientSecret();
    }, [basket]);

    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        });
        setClientSecret(response.data.clientSecret);
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    };

    return (
        <PaymentContext.Provider
            value={{
                error,
                setError,
                disabled,
                succeeded,
                setSucceeded,
                processing,
                setProcessing,
                clientSecret,
                handleChange,
            }}
        >
            {children}
        </PaymentContext.Provider>
    );
};

export default PaymentContextProvider;
