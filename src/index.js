import React from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { StateContextProvider } from './components/store/StateContext';
import reducer, { initialState } from './components/store/reducer';
import AuthContextProvider from './components/contexts/AuthContext';
import ProductsContextProvider from './components/contexts/ProductsContext';
import PaymentContextProvider from './components/contexts/PaymentContext';

import App from './App';

import './scss/main.scss';

const promise = loadStripe(
    'pk_test_51HeUaFHxPghHyDls1HUYzze4UDJfSlqoggKfhpw2oRVzoMmQtaZI1qU8tkgy44j6GvRQjEDmn4X0w11MLVfMKcSl00fmisJHtg'
);

ReactDOM.render(
    <React.StrictMode>
        <StateContextProvider initialState={initialState} reducer={reducer}>
            <AuthContextProvider>
                <ProductsContextProvider>
                    <Elements stripe={promise}>
                        <PaymentContextProvider>
                            <App />
                        </PaymentContextProvider>
                    </Elements>
                </ProductsContextProvider>
            </AuthContextProvider>
        </StateContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
