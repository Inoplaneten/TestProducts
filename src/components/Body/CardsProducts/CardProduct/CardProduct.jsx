import React from 'react';
import { CategoryProduct } from '../../CategoryProduct/CategoryProduct';
import { TitleProduct } from '../../TitleProduct/TitleProduct';
import { PriceProduct } from '../../PriceProduct/PriceProduct';
import { ButtonOrderProduct } from '../../ButtonOrderProduct/ButtonOrderProduct';
import classes from './CardProduct.module.scss';

const CardProduct = ({currentProduct, modalOrder, setCurrentProduct, setVisibleModal, setUpdateDataHiddenField}) => {
    return (
        <div className={classes.cardProduct}>
             <CategoryProduct
                category={currentProduct.category}
            />
            <TitleProduct
                title={currentProduct.name}
            />
            <div className={classes.cardProductInfo}>
                <PriceProduct
                    currency='$'
                    price={currentProduct.price} 
                />
                <ButtonOrderProduct
                    type='button'
                    title='Buy'
                    onClick={() => {setCurrentProduct(currentProduct); setVisibleModal(modalOrder.name); setUpdateDataHiddenField(currentProduct);}}
                />
            </div>
        </div>
    )
}

export { CardProduct };