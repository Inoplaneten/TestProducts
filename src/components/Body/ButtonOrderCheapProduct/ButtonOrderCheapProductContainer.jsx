import React from 'react';
import { connect } from 'react-redux';
import { ButtonOrderCheapProduct } from './ButtonOrderCheapProduct';
import { setCurrentProduct, setVisibleModal, setUpdateDataHiddenField } from '../../../redux/actions/action';
import { getcheapProduct } from '../../../modules/getcheapProduct';

const ButtonOrderCheapProductContainer = ({cardsProducts, modalOrder, setCurrentProduct, setVisibleModal, setUpdateDataHiddenField}) => {
    const cheapProduct = getcheapProduct(cardsProducts.products);
    return (
        <ButtonOrderCheapProduct
            title='Buy cheapest'
            onClick={() => {setCurrentProduct(cheapProduct); setVisibleModal(modalOrder.name); setUpdateDataHiddenField(cheapProduct);}}
        />
    )
}

const mapStateToProps = state => ({
    cardsProducts: {
        products: state.cardsProducts.products,
        isLoading: state.cardsProducts.isLoading
    },
    modalOrder: {
        name: state.modals.modalOrder.name,
        isActive: state.modals.modalOrder.isActive
    }
})

const mapDispatchToProps =  {
    setCurrentProduct,
    setVisibleModal,
    setUpdateDataHiddenField
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonOrderCheapProductContainer);