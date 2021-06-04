export const getDataForm = form => {
    let dataForms = [{[form.name]: form.name}];
    dataForms = Object.values(form.fields).reduce((fields, field) => {
        return [...fields, {[field.name]: field.value}];
    }, [...dataForms]);

    return dataForms;
};