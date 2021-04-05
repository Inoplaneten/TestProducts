import { UPDATE_INPUT_VALUE, NOVALIDATE_INPUT_VALUE, GET_WAIT_FORM, SUCCES_FORM } from "../actionTypes/actionTypes";
import { isEmpty, isMinLength, isMaxLength, isNumber, isWords, isErrorsForm } from '../../modules/validators';

const initialState = {
    name: 'formOrderProduct',
    validators: { isErrorsForm },
    succesForm: false,
    fields: {
        category: {
            type: 'hidden',
            name: 'category',
            value: '',
        },
        name: {
            type: 'hidden',
            name: 'name',
            value: '',
        },
        price: {
            type: 'hidden',
            name: 'price',
            value: '',
        },
        nameСustomer: {
            type: 'text',
            placeholder: 'Name',
            name: 'nameСustomer',
            value: '',
            requiered: true,
            words: true,
            maxLength: 15,
            minLength: 5,
            error: false,
            errorType: {
                requiered: false,
                words: false,
                minLength: false,
                maxLength: false
            },
            isErrorMessage: {
                requiered: 'This field in required',
                words: 'Only letters allowed',
                minLength: `Should contain min 5 characters`,
                maxLength: `Should contain max 15 characters`,
            },
            validators: { isEmpty, isMinLength, isMaxLength, isWords }
        },
        telСustomer: {
            type: 'tel',
            placeholder: 'Number',
            name: 'telСustomer',
            value: '',
            requiered: true,
            digits: true,
            minLength: 12,
            maxLength: 12,
            error: false,
            errorType: {
                requiered: false,
                digits: false,
                minLength: false,
                maxLength: false
            },
            isErrorMessage: {
                requiered: 'This field in required',
                digits: 'Only letters number',
                minLength: `Should contain 12 characters`,
                maxLength: `Should contain 12 characters`
            },
            validators: { isEmpty, isMinLength, isMaxLength, isNumber }
        }
    },
    isLoading: false
}

const formOrderProduct = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_INPUT_VALUE:
            if(state.fields[action.inputName].type !== 'hidden') {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                        [action.inputName]: {
                            ...state.fields[action.inputName],
                            value: action.currentValue,
                            error: false,
                            errorType: Object.keys(state.fields[action.inputName].errorType).reduce((errors, errorName) => ({...errors, [errorName]: false}), {})
                        }
                    }
                }
            }else {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                        [action.inputName]: {
                            ...state.fields[action.inputName],
                            value: action.currentValue
                        }
                    }
                }
            }       
        case NOVALIDATE_INPUT_VALUE:
            if('validators' in state.fields[action.inputName]) {
                if((state.fields[action.inputName].requiered && 'isEmpty' in state.fields[action.inputName].validators) && state.fields[action.inputName].validators.isEmpty(action.currentValue)) {
                    return {
                        ...state,
                        fields: {
                            ...state.fields,
                            [action.inputName]: {
                                ...state.fields[action.inputName],
                                value: action.currentValue,
                                error: true,
                                errorType: {
                                    ...state.fields[action.inputName].errorType,
                                    requiered: true
                                }
                            }
                        }
                    }
                }else if(action.currentValue.length) {
                    if((state.fields[action.inputName].words && 'isWords' in state.fields[action.inputName].validators) && !state.fields[action.inputName].validators.isWords(action.currentValue)) {
                        return {
                            ...state,
                            fields: {
                                ...state.fields,
                                [action.inputName]: {
                                    ...state.fields[action.inputName],
                                    value: action.currentValue,
                                    error: true,
                                    errorType: {
                                        ...state.fields[action.inputName].errorType,
                                        words: true
                                    }
                                }
                            }
                        }
                    }else if((state.fields[action.inputName].digits && 'isNumber' in state.fields[action.inputName].validators) && !state.fields[action.inputName].validators.isNumber(action.currentValue)) {
                        return {
                            ...state,
                            fields: {
                                ...state.fields,
                                [action.inputName]: {
                                    ...state.fields[action.inputName],
                                    value: action.currentValue,
                                    error: true,
                                    errorType: {
                                        ...state.fields[action.inputName].errorType,
                                        digits: true
                                    }
                                }
                            }
                        }
                    }else if((state.fields[action.inputName].minLength && 'isMinLength' in state.fields[action.inputName].validators) && state.fields[action.inputName].validators.isMinLength(action.currentValue.length, state.fields[action.inputName].minLength)) {
                        return {
                            ...state,
                            fields: {
                                ...state.fields,
                                [action.inputName]: {
                                    ...state.fields[action.inputName],
                                    value: action.currentValue,
                                    error: true,
                                    errorType: {
                                        ...state.fields[action.inputName].errorType,
                                        minLength: true
                                    }
                                }
                            }
                        }
                    }else if((state.fields[action.inputName].maxLength && 'isMaxLength' in state.fields[action.inputName].validators) && state.fields[action.inputName].validators.isMaxLength(action.currentValue.length, state.fields[action.inputName].maxLength)) {
                        return {
                            ...state,
                            fields: {
                                ...state.fields,
                                [action.inputName]: {
                                    ...state.fields[action.inputName],
                                    value: action.currentValue,
                                    error: true,
                                    errorType: {
                                        ...state.fields[action.inputName].errorType,
                                        maxLength: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                ...state,
            }                     
        case GET_WAIT_FORM:
            return {
                ...state,
                succesForm: true,
                fields: Object.values(state.fields).reduce((fields, field) => ({...fields, [field.name]:{...state.fields[field.name], value: ''}}), {...state.fields}),  
                isLoading: true,
            }                   
        case SUCCES_FORM:
           return {
                ...state,
                succesForm: false,
                fields: {
                    ...state.fields,
                },  
                isLoading: false
           }
        default: 
            return state;    
    }
};

export { formOrderProduct };