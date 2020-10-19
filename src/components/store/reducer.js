export const initialState = { basket: [], user: null };

const reducer = (state, { type, item }) => {
    switch (type) {
        case 'ADD_TO_BASKET':
            return { ...state, basket: [...state.basket, item] };

        default:
            return state;
    }
};

export default reducer;
