import React from 'react';
import { connect } from 'react-redux';
import { ModalBox } from './ModalBox';
import { ModalWindow } from './ModalWindow/ModalWindow';
import { ModalContent } from './ModalWindow/ModalContent/ModalContent';
import { CategoryProduct } from './../Body/CategoryProduct/CategoryProduct';
import { TitleProduct } from './../Body/TitleProduct/TitleProduct';
import { PriceProduct } from './../Body/PriceProduct/PriceProduct';
import FormOrderProductContainer from '../Body/Form/FormOrderProductContainer';
import { setHiddenModal } from './../../redux/actions/action';

const ModalOrderBoxContainer = ({orderProduct, modalOrder, setHiddenModal}) => {
    return (
        <ModalBox 
            isActive={modalOrder.isActive}
            onClick={() => setHiddenModal(modalOrder.name)}
        >
            <ModalWindow 
                onClick={e => e.stopPropagation()} 
                closeModal={() => setHiddenModal(modalOrder.name)}
            >
                <ModalContent>
                    <CategoryProduct
                        category={orderProduct.product.category}
                    />
                    <TitleProduct
                        title={orderProduct.product.name}
                    />
                    <PriceProduct
                        currency='$'
                        price={orderProduct.product.price} 
                    />
                </ModalContent>
                <FormOrderProductContainer/>
            </ModalWindow>
        </ModalBox>
    )
}

const mapStateToProps = state => ({
    orderProduct: {
        product: state.orderProduct.product,
    },
    modalOrder: {
        name: state.modals.modalOrder.name,
        isActive: state.modals.modalOrder.isActive
    }
})

export default connect(mapStateToProps, {setHiddenModal})(ModalOrderBoxContainer);