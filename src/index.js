import React from 'react';
import ReactDOM from 'react-dom';

import { StateContextProvider } from './components/store/StateContext';
import reducer, { initialState } from './components/store/reducer';

import App from './App';

import './scss/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <StateContextProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
