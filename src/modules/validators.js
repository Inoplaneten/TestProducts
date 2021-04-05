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
    let errorsForm = [];
    Object.values(form.fields).forEach(field => {
        if('validators' in field) {
            if(
                ((field.requiered && 'isEmpty' in field.validators) && field.validators.isEmpty(field.value)) || 
                ((field.words && 'isWords' in field.validators) && !field.validators.isWords(field.value)) ||
                ((field.digits && 'isNumber' in field.validators) && !field.validators.isNumber(field.value)) ||
                ((field.minLength && 'isMinLength' in field.validators) && field.validators.isMinLength(field.value.length, field.minLength)) ||
                ((field.minLength && 'isMaxLength' in field.validators) && field.validators.isMaxLength(field.value.length, field.maxLength))
            ) {
                errorsForm = [...errorsForm, field.name];
            }
        }
    });
    if(errorsForm.length) {
        return true;
    }else {
        return false;
    }
}