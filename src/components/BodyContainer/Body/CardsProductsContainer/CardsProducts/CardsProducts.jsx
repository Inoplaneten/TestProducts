import React from 'react';
import { CardProduct } from './CardProduct/CardProduct';
import classes from './CardsProducts.module.scss';
const CardsProducts = ({cardsProducts, setCurrentProduct}) => {
    return (
        <>
            <div className={classes.cardsProducts}>
                {cardsProducts.products.map((product, index) => {
                    return (
                        <CardProduct
                            key={index}
                            category={product.category}
                            title={product.name}
                            price={product.price}
                            currentProduct={cardsProducts.products[index]}
                            setCurrentProduct={setCurrentProduct}
                        >   
                        </CardProduct>
                    )
                })}
            </div>
        </>
    )
}

export { CardsProducts };