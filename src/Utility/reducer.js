// import { useReducer } from 'react'; // Import is unnecessary here
import { Type } from './action.type';

export const initialState = {
    basket: [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        default:
            return state;
    }
};




// This part should be within a functional component
// Example usage:
// const [state, dispatch] = useReducer(reducer, initialState);