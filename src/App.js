import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import History from './components/History';

import Header from './components/Header';
import Home from './components/pages/Home';
import Checkout from './components/pages/Checkout';
import SignIn from './components/pages/SignIn';
import Payment from './components/pages/Payment';
import Orders from './components/pages/Orders';
import Footer from './components/Footer';

const promise = loadStripe(
    'pk_test_51HeUaFHxPghHyDls1HUYzze4UDJfSlqoggKfhpw2oRVzoMmQtaZI1qU8tkgy44j6GvRQjEDmn4X0w11MLVfMKcSl00fmisJHtg'
);

function App() {
    return (
        <div className='App'>
            <Router history={History}>
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
                    <Route exact path='/orders' component={Orders} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
