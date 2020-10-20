import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { auth } from './firebase';
import { useStateValue } from './components/store/StateContext';

import Header from './components/Header';
import Home from './components/pages/Home';
import Checkout from './components/pages/Checkout';
import SignIn from './components/pages/SignIn';
import Payment from './components/pages/Payment';

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
                    <Route exact path='/payment' component={Payment} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
