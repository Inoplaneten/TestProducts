import React from 'react';
import { CategoryProduct } from '../../../CategoryProduct/CategoryProduct';
import { TitleProduct } from '../../../TitleProduct/TitleProduct';
import { PriceProduct } from '../../../PriceProduct/PriceProduct';
import { ButtonOrderProduct } from '../../../ButtonOrderProduct/ButtonOrderProduct';
import classes from './CardProduct.module.scss';

const CardProduct = ({category, title, price, currentProduct, setCurrentProduct}) => {
    return (
        <div className={classes.cardProduct}>
             <CategoryProduct
                category={category}
            />
            <TitleProduct
                title={title}
            />
            <div className={classes.cardProductInfo}>
                <PriceProduct
                    currency='$'
                    price={price} 
                />
                <ButtonOrderProduct
                    type="button"
                    title="Buy"
                    onClick={() => setCurrentProduct(currentProduct)}
                />
            </div>
        </div>
    )
}

export { CardProduct };