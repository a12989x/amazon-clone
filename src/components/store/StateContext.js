import React, { createContext, useContext, useReducer } from 'react';

const StateContext = createContext();

const StateContextProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

const useStateValue = () => useContext(StateContext);

export { StateContext, StateContextProvider, useStateValue };
