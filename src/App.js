import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { auth } from './firebase';
import { useStateValue } from './components/store/StateContext';

import Header from './components/Header';
import Home from './components/pages/Home';
import Checkout from './components/pages/Checkout';
import SignIn from './components/pages/SignIn';
import Payment from './components/pages/Payment';

const promise = loadStripe(
    'pk_test_51HeUaFHxPghHyDls1HUYzze4UDJfSlqoggKfhpw2oRVzoMmQtaZI1qU8tkgy44j6GvRQjEDmn4X0w11MLVfMKcSl00fmisJHtg'
);

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                dispatch({ type: 'SET_USER', user: null });
            }
        });
    }, []);

    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/sign-in' component={SignIn} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route exact path='/payment'>
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
