import { GET_VISIBLE_MODAL, GET_HIDDEN_MODAL } from '../actionTypes/actionTypes';

const initialState = {
    modalOrder: {
        name: 'modalOrder',
        isActive: false
    },
    modalThx: {
        name: 'modalThx',
        isActive: false
    }
}

const modals = (state = initialState, action) => {
    switch(action.type) {
        case GET_VISIBLE_MODAL:
            return {
                ...state,
                [action.nameModal]: {
                    ...state[action.nameModal],
                    isActive: true,
                }
            };
        case GET_HIDDEN_MODAL:
            return {
                ...state,
                [action.nameModal]: {
                    ...state[action.nameModal],
                    isActive: false,
                }
            };      
        default: 
            return state;
    }
}

export { modals };