import React from 'react';
import classes from './ButtonOrderCheapProduct.module.scss';

const ButtonOrderCheapProduct = props => {
    return (
        <button type="button" onClick={props.onClick} className={classes.btnOrderCheapProduct}>
            {props.title}
        </button>
    )
}

export { ButtonOrderCheapProduct };