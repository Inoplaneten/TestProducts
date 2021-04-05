import { GET_CURRENT_PRODUCT } from '../actionTypes/actionTypes';

const initialState = {
    product: {},
}

const orderProduct = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENT_PRODUCT:
            return {
                ...state,
                product: action.currentProduct,
            };   
        default: 
            return state;
    }
}

export { orderProduct };