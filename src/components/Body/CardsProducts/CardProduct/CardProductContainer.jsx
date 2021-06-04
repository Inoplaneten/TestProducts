import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CardProduct } from './CardProduct';
import { 
    setCardsProductsBegin, 
    setCardsProductsSuccess, 
    setCardsProductsFailure, 
    setCurrentProduct, 
    setVisibleModal, 
    setUpdateDataHiddenField 
} from '../../../../redux/actions/action';
import { getDataFromTheServer } from '../../../../modules/getDataFromTheServer';

const CardProductContainer = ({cardsProducts, modalOrder, setCardsProductsBegin, setCardsProductsSuccess, setCardsProductsFailure, ...props}) => {
    useEffect(() => {
        getDataFromTheServer('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e', setCardsProductsBegin, setCardsProductsSuccess, setCardsProductsFailure);
    }, [setCardsProductsBegin, setCardsProductsSuccess, setCardsProductsFailure]);
    return (
        cardsProducts.products.map((product, index) => {
            return (
                <CardProduct
                    key={index}
                    currentProduct={cardsProducts.products[index]}
                    modalOrder={modalOrder}
                    {...props}
                >   
                </CardProduct>
            )
        })
    )
}

const mapStateToProps = state => ({
    cardsProducts: {
        products: state.cardsProducts.products,
    },
    modalOrder: {
        name: state.modals.modalOrder.name,
        isActive: state.modals.modalOrder.isActive
    }
})

const mapDispatchToProps =  {
    setCardsProductsBegin,
    setCardsProductsSuccess,
    setCardsProductsFailure,
    setCurrentProduct,
    setVisibleModal,
    setUpdateDataHiddenField
}

export default connect(mapStateToProps, mapDispatchToProps)(CardProductContainer);
