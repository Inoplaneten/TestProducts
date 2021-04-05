export const onSubmitHadler = (event, form, arrModal = null) => (setValidateField, setGetWaitForm, setSuccesForm, setVisibleModal = null, setHiddenModal = null) => {
    event.preventDefault();
    let [modalForm, modalThx] = arrModal;
    const getDataForm = form => {
        let dataForms = [{[form.name]: form.name}];
        dataForms = Object.values(form.fields).reduce((fields, field) => {
            return [...fields, {[field.name]: field.value}];
        }, [...dataForms])
        return dataForms;
    };
    if((('validators' in form) && ('isErrorsForm' in form.validators)) && form.validators.isErrorsForm(form)) {
        Object.values(form.fields).forEach(field => {
            ('validators' in form.fields[field.name]) && setValidateField(field.value, field.name);
        });
    }else {
        setTimeout( ()=> {
            setGetWaitForm();
            typeof setHiddenModal === 'function' && arrModal.length &&
            setHiddenModal(modalForm);
        }, 800);
        setTimeout( ()=> {
            console.log(getDataForm(form));
            setSuccesForm();
            typeof setVisibleModal === 'function' && arrModal.length &&
            setVisibleModal(modalThx);
        }, 2000);
    }
};