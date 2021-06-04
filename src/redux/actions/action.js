import {
    GET_CARDS_PRODUCTS_BEGIN, 
    GET_CARDS_PRODUCTS_SUCCESS, 
    GET_CARDS_PRODUCTS_FAILURE, 
    GET_CURRENT_PRODUCT, 
    GET_VISIBLE_MODAL, 
    GET_HIDDEN_MODAL, 
    UPDATE_INPUT_VALUE,
    UPDATE_INPUT_HIDDEN_VALUE,
    NOVALIDATE_INPUT_VALUE,
    GET_WAIT_FORM, 
    SUCCES_FORM
} from '../actionTypes/actionTypes';

export const setCardsProductsBegin = () => ({
    type: GET_CARDS_PRODUCTS_BEGIN
})

export const setCardsProductsSuccess = data => ({
    type: GET_CARDS_PRODUCTS_SUCCESS,
    payload: data
})

export const setCardsProductsFailure = () => ({
    type: GET_CARDS_PRODUCTS_FAILURE
})

export const setCurrentProduct = data => ({
    type: GET_CURRENT_PRODUCT, 
    currentProduct: data
})

export const setVisibleModal = nameModal => ({
    type: GET_VISIBLE_MODAL,
    nameModal
})

export const setHiddenModal = nameModal => ({
    type: GET_HIDDEN_MODAL,
    nameModal
})

export const setUpdateDataField = (currentValue, inputName) => ({
    type: UPDATE_INPUT_VALUE,
    currentValue,
    inputName
})

export const setUpdateDataHiddenField = data => ({
    type: UPDATE_INPUT_HIDDEN_VALUE,
    data
})

export const setValidateField = (currentValue, inputName) => ({
    type: NOVALIDATE_INPUT_VALUE,
    currentValue,
    inputName
})

export const setGetWaitForm = () => ({
    type: GET_WAIT_FORM,
})

export const setSuccesForm = () => ({
    type: SUCCES_FORM
})