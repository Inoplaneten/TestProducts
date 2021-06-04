import React from 'react';
import { connect } from 'react-redux';
import { Form } from './Form';
import { Input } from '../Input/Input';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import { setUpdateDataField, setValidateField, setGetWaitForm, setSuccesForm, setVisibleModal, setHiddenModal } from '../../../redux/actions/action';
import { getDataForm } from '../../../modules/getDataForm';

const FormOrderProductContainer = ({
    formOrderProduct, 
    orderProduct, 
    modalOrder, 
    modalThx, 
    setUpdateDataField, 
    setValidateField, 
    setGetWaitForm, 
    setSuccesForm, 
    setVisibleModal, 
    setHiddenModal
}) => {
    const handleSubmit = (event, form) => {
        event.preventDefault();

        if(('validators' in form && 'getErrorsForm' in form.validators) && form.validators.getErrorsForm(form)) {
            Object.values(form.fields).forEach(field => {
                'validators' in form.fields[field.name] && setValidateField(field.value, field.name);
            });
        }else {
            setTimeout( ()=> {
                setGetWaitForm();
                setHiddenModal(modalOrder.name);
            }, 800);
            setTimeout( ()=> {
                console.log(getDataForm(form));
                setSuccesForm();
                setVisibleModal(modalThx.name);
            }, 2000);
        }
    }
    
    return (
        <Form   
            name={formOrderProduct.name}
            onSubmit={e => handleSubmit(e, formOrderProduct)}
        >
            {
                Object.values(formOrderProduct.fields).map((field, index) => {
                    return (
                        field.type === 'hidden' ? 
                        <Input
                            key={index} 
                            type={field.type}
                            name={field.name}
                            value={Object.keys(orderProduct).length !== 0 ? orderProduct[field.name]: field.value}
                            
                        />:
                        <Input
                            key={index} 
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={field.value}
                            error={field.error}
                            errorText={field.errorText}
                            onUpdateValue={e => setUpdateDataField(e.target.value, e.target.name)}
                            onTouchedValidate={e => setValidateField(e.target.value, e.target.name)}
                            
                        />
                    )
                })
            }
            <ButtonSubmit
                title='Order'
            />

        </Form>
    )
}

const mapStateToProps = state => ({
    formOrderProduct: {
        name: state.formOrderProduct.name,
        validators: state.formOrderProduct.validators,
        succesForm: state.formOrderProduct.succesForm,
        fields: state.formOrderProduct.fields,
        isLoading: state.formOrderProduct.isLoading
    },
    orderProduct: state.orderProduct.product,
    modalOrder: {
        name: state.modals.modalOrder.name,
        isActive: state.modals.modalOrder.isActive
    },
    modalThx: {
        name: state.modals.modalThx.name,
        isActive: state.modals.modalThx.isActive
    }
})

const mapDispatchToProps =  {
    setUpdateDataField,
    setValidateField,
    setGetWaitForm,
    setSuccesForm,
    setVisibleModal,
    setHiddenModal
}

export default connect(mapStateToProps, mapDispatchToProps)(FormOrderProductContainer);