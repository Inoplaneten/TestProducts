import { cardsProducts } from './redusers/cardsProductsReduser';
import { orderProduct } from './redusers/orderProductReduser';
import { modals } from './redusers/modalsReduser';
import { formOrderProduct } from './redusers/formOrderProductReduser';
import { combineReducers, createStore } from 'redux';
const сonnectReducers = combineReducers({
    cardsProducts,
    orderProduct,
    modals,
    formOrderProduct
});

let store = createStore(сonnectReducers);

window.store = store;

export default store;