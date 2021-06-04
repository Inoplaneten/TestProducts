import { UPDATE_INPUT_VALUE, UPDATE_INPUT_HIDDEN_VALUE, NOVALIDATE_INPUT_VALUE, GET_WAIT_FORM, SUCCES_FORM } from "../actionTypes/actionTypes";
import { isEmpty, isMinLength, isMaxLength, isNumber, isWords, isErrorsForm } from '../../modules/validators';

const initialState = {
    name: 'formOrderProduct',
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
            error: false,
            errorText: null,
            validators: [
                {
                    getErrorEmpty: value => isEmpty(value),
                    errorText: 'This field in required'
                },
                {
                    getErrorWords: value => isWords(value),
                    errorText: 'Only letters allowed'
                },
                {
                    getErrorMinLength: value => isMinLength(value.length, 5),
                    errorText: 'Should contain min 5 characters'
                },
                {
                    getErrorMaxLength: value => isMaxLength(value.length, 15),
                    errorText: 'Should contain max 15 characters'
                },
            ]
        },
        telСustomer: {
            type: 'tel',
            placeholder: 'Number',
            name: 'telСustomer',
            value: '',
            requiered: true,
            error: false,
            errorText: null,
            validators: [
                {
                    getErrorEmpty: value => isEmpty(value),
                    errorText: 'This field in required'
                },
                {
                    getErrorNumber: value => isNumber(value),
                    errorText: 'Only letters number'
                },
                {
                    getErrorMinLength: value => isMinLength(value.length, 12),
                    errorText: 'Should contain 12 characters'
                },
                {
                    getErrorMaxLength: value => isMaxLength(value.length, 12),
                    errorText: 'Should contain 12 characters'
                },
            ]
        }
    },
    validators: { getErrorsForm: form => isErrorsForm(form) },
    succesForm: false,
    isLoading: false
}

const formOrderProduct = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_INPUT_VALUE:
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.inputName]: {
                        ...state.fields[action.inputName],
                        value: action.currentValue,
                        error: false
                    }
                }
            }
        case UPDATE_INPUT_HIDDEN_VALUE:
            return {
                ...state,
                fields: Object.values(state.fields).reduce((fields, field) => {
                    if(field.type === 'hidden') {
                        return {...fields, [field.name]: {...state.fields[field.name], value: action.data[field.name]}} 
                    }
                    return {...fields}
                }, {...state.fields}),
            }    
        case NOVALIDATE_INPUT_VALUE:
            let error,
                errorText;

            'validators' in state.fields[action.inputName] && state.fields[action.inputName].validators.some(errorType => {
                if(state.fields[action.inputName].requiered && 'getErrorEmpty' in errorType && errorType.getErrorEmpty(action.currentValue)) {
                    return (errorText = errorType.errorText, error = true);
                }else if(action.currentValue.length) {
                    if('getErrorWords' in errorType && !errorType.getErrorWords(action.currentValue)) {
                        return (errorText = errorType.errorText, error = true);
                    }else if('getErrorNumber' in errorType && !errorType.getErrorNumber(action.currentValue)) {
                        return (errorText = errorType.errorText, error = true);
                    }else if('getErrorMinLength' in errorType && errorType.getErrorMinLength(action.currentValue)) {
                        return (errorText = errorType.errorText, error = true);
                    }else if('getErrorMaxLength' in errorType && errorType.getErrorMaxLength(action.currentValue)) {
                        return (errorText = errorType.errorText, error = true);
                    }
                }

                return (errorText = null, error = false);
            });

            return {
                ...state,
                    fields: {
                        ...state.fields, 
                        [action.inputName]: {
                        ...state.fields[action.inputName], 
                        value: action.currentValue,
                        error,
                        errorText
                    }    
                }          
            }    
        case GET_WAIT_FORM:
            return {
                ...state,
                fields: Object.values(state.fields).reduce((fields, field) => (
                    {
                        ...fields, 
                        [field.name]: {
                            ...state.fields[field.name], 
                            value: ''
                        }
                    }), {...state.fields}
                ),
                succesForm: true,  
                isLoading: true
            }                   
        case SUCCES_FORM:
           return {
                ...state,
                fields: {
                    ...state.fields,
                },
                succesForm: false,  
                isLoading: false
           }
        default: 
            return state;    
    }
};

export { formOrderProduct };