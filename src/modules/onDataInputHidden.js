export const onDataInputHidden = (form, data, setUpdateDataField) => {
    Object.values(form.fields).forEach(field => {
        field.type === 'hidden' && setUpdateDataField(data[field.name], field.name);  
    })
};