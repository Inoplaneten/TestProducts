import React from 'react';
import classes from './PriceProduct.module.scss';

const PriceProduct = props => {
    console.log();
    return (
        <span className={classes.priceProduct}>
            <span className={classes.currencyProduct}>
                {props.currency}
            </span>
            <span>
                {props.price}
            </span>
        </span>
    )
}

export { PriceProduct };