import React, { useEffect } from 'react';
import { Preloader } from './Preloader/Preloader';
import { Section } from './Section/Section';
import { CardsProducts } from './CardsProducts/CardsProducts';
import { ModalBox } from './ModalBox/ModalBox';
import { ModalWindow } from './ModalBox/ModalWindow/ModalWindow';
import { ModalContent } from './ModalBox/ModalWindow/ModalContent/ModalContent';
import { CategoryProduct } from './CategoryProduct/CategoryProduct';
import { TitleProduct } from './TitleProduct/TitleProduct';
import { PriceProduct} from './PriceProduct/PriceProduct';
import { ButtonOrderCheapProduct } from './ButtonOrderCheapProduct/ButtonOrderCheapProduct';
import { Form } from './Form/Form';
import { Input } from './Input/Input';
import { ButtonSubmit } from './ButtonSubmit/ButtonSubmit';
import { getcheapProduct } from '../../../modules/getcheapProduct';
import { getDataFromTheServer } from '../../../modules/getDataFromTheServer';
import { onSubmitHadler } from '../../../modules/onSubmitHadler';
import { onDataInputHidden } from '../../../modules/onDataInputHidden';
const Body = props => {
    useEffect(() => {
        getDataFromTheServer('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e', props.setCardsProductsBegin, props.setCardsProductsSuccess, props.setCardsProductsFailure);
    }, [props.setCardsProductsBegin, props.setCardsProductsSuccess, props.setCardsProductsFailure]);
    return (
        <>
            <Preloader
                isLoading={
                    (props.cardsProducts.isLoading) || 
                    (props.cardsProducts.isError) || 
                    (props.formOrderProduct.isLoading)
                }
            >
                <div>{ 
                    props.cardsProducts.isLoading ? 'Loading in progress': 
                    props.cardsProducts.isError ? 'Server error': 
                    props.formOrderProduct.isLoading ? 'Sending data': null }
               </div>
            </Preloader>
            <Section>
                <CardsProducts 
                    cardsProducts={props.cardsProducts} 
                    setCurrentProduct={props.setCurrentProduct} 
                    setVisibleModal={props.setVisibleModal}
                    formOrderProduct={props.formOrderProduct}
                    setUpdateDataField={props.setUpdateDataField}
                    modalOrder={props.modals.modalOrder.name}
                />
                <ButtonOrderCheapProduct
                    title='Buy cheapest' 
                    onClick={() => {
                        props.setCurrentProduct(getcheapProduct(props.cardsProducts.products)); 
                        props.setVisibleModal(props.modals.modalOrder.name); 
                        onDataInputHidden(props.formOrderProduct, getcheapProduct(props.cardsProducts.products), props.setUpdateDataField);
                    }}
                />
            </Section>
            <ModalBox
                isActive={props.modals.modalOrder.isActive}
                onClick={() => props.setHiddenModal(props.modals.modalOrder.name)}
            >
                <ModalWindow onClick={e => e.stopPropagation()} closeModal={() => props.setHiddenModal(props.modals.modalOrder.name)}>
                    <ModalContent>
                        <CategoryProduct
                            category={props.orderProduct.product.category}
                        />
                        <TitleProduct
                            title={props.orderProduct.product.name}
                        />
                        <PriceProduct
                            currency='$'
                            price={props.orderProduct.product.price} 
                        />
                    </ModalContent> 
                    <Form
                        name={props.formOrderProduct.name}
                        onSubmit={e => onSubmitHadler(e, props.formOrderProduct, [props.modals.modalOrder.name, props.modals.modalThx.name])(props.setValidateField, props.setGetWaitForm, props.setSuccesForm, props.setVisibleModal, props.setHiddenModal)}
                    >
                        {
                            Object.values(props.formOrderProduct.fields).map((field, index) => {
                                return (
                                    field.type === 'hidden' ? 
                                    <Input
                                        key={index} 
                                        type={field.type}
                                        name={field.name}
                                        value={Object.keys(props.orderProduct.product).length !== 0 ? props.orderProduct.product[field.name]: field.value}
                                        
                                    />:
                                    <Input
                                        key={index} 
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        value={field.value}
                                        error={field.error}
                                        errorType={field.errorType}
                                        isErrorMessage={field.isErrorMessage}
                                        onUpdateValue={e => props.setUpdateDataField(e.target.value, e.target.name)}
                                        onTouchedValidate={e => props.setValidateField(e.target.value, e.target.name)}
                                        
                                    />
                                )
                            })
                        }
                        <ButtonSubmit
                            title='Order'
                        />
                    </Form>
                </ModalWindow>
            </ModalBox>
            <ModalBox 
                isActive={props.modals.modalThx.isActive}
                onClick={() => props.setHiddenModal(props.modals.modalThx.name)}
            >
                <ModalWindow onClick={e => e.stopPropagation()} closeModal={() => props.setHiddenModal(props.modals.modalThx.name)}>   
                    <ModalContent>
                        <p>
                            Thank you for the order!
                        </p>
                        <p>
                            We will contact you shortly!
                        </p>
                    </ModalContent>
                </ModalWindow>
            </ModalBox>
        </>
    )
}

export { Body }