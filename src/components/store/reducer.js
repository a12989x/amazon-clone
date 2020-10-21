export const initialState = { basket: [], user: null };

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, { type, item, id, user }) => {
    switch (type) {
        case 'ADD_TO_BASKET':
            return { ...state, basket: [...state.basket, item] };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${id} as its not in basket!)`
                );
            }

            return { ...state, basket: newBasket };

        case 'EMPTY_BASKET':
            return { ...state, basket: [] };

        case 'SET_USER':
            return { ...state, user };

        default:
            return state;
    }
};

export default reducer;
