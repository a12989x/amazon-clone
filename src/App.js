import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/Home';
import Checkout from './components/pages/Checkout';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/checkout' component={Checkout} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
