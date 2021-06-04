import React from 'react';
import CardProductContainer from './CardProduct/CardProductContainer';
import classes from './CardsProducts.module.scss';
const CardsProducts = () => {
    return (
        <div className={classes.cardsProducts}>
            <CardProductContainer/>
        </div>
    )
}

export { CardsProducts };