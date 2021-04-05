import { 
    setCardsProductsBegin, 
    setCardsProductsSuccess, 
    setCardsProductsFailure, 
    setCurrentProduct, 
    setVisibleModal, 
    setHiddenModal, 
    setUpdateDataField, 
    setValidateField,
    setGetWaitForm,
    setSuccesForm
} from '../../redux/actions/action';
import { Body } from './Body/Body';
import { connect } from 'react-redux';
const mapStateToProps = state => ({
    cardsProducts: {
        products: state.cardsProducts.products,
        isLoading: state.cardsProducts.isLoading,
        isError: state.cardsProducts.isError
    },
    orderProduct: {
        product: state.orderProduct.product
    },
    modals: {
        modalOrder: {
            name: state.modals.modalOrder.name,
            isActive: state.modals.modalOrder.isActive
        },
        modalThx: {
            name: state.modals.modalThx.name,
            isActive: state.modals.modalThx.isActive
        }
    },
    formOrderProduct: {
        name: state.formOrderProduct.name,
        validators: state.formOrderProduct.validators,
        succesForm: state.formOrderProduct.succesForm,
        fields: state.formOrderProduct.fields,
        isLoading: state.formOrderProduct.isLoading
    }
})

const mapDispatchToProps =  {
    setCardsProductsBegin,
    setCardsProductsSuccess,
    setCardsProductsFailure,
    setCurrentProduct,
    setVisibleModal,
    setHiddenModal,
    setUpdateDataField,
    setValidateField,
    setGetWaitForm,
    setSuccesForm
}

const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(Body);

export default BodyContainer;