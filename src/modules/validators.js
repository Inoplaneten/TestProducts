export const isEmpty = value => !value && !value;

export const isWithinRange = (value, min, max) => value >= min && value <= max;

export const isMaxLength = (value, max) => value > max && value > max;

export const isMinLength = (value, min) => value < min && value < min;

export const isNumber = value => !Number.isNaN(+value);

export const isWords = value => {
    let regex = /[\d|,|.|e|E|+]+/g,
        num = value.match(regex);
    return !num && !num;
}

export const isErrorsForm = form =>  {
    let errorsForm;
    Object.values(form.fields).forEach(field => {
        if('validators' in field) {
            field.validators.some(errorType => {
                if(field.requiered && 'getErrorEmpty' in errorType && errorType.getErrorEmpty(field.value)) {
                    return (errorsForm = true);
                }else if(field.value.length) {
                    if('getErrorWords' in errorType && !errorType.getErrorWords(field.value)) {
                        return (errorsForm = true);
                    }else if('getErrorNumber' in errorType && !errorType.getErrorNumber(field.value)) {
                        return (errorsForm = true);
                    }else if('getErrorMinLength' in errorType && errorType.getErrorMinLength(field.value)) {
                        return (errorsForm = true);
                    }else if('getErrorMaxLength' in errorType && errorType.getErrorMaxLength(field.value)) {
                        return (errorsForm = true);
                    }
                }

                return (errorsForm = false);
            });
        }
    });

    return errorsForm;
}