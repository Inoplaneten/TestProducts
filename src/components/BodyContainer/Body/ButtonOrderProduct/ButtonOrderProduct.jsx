import React from 'react';
import classes from './ButtonOrderProduct.module.scss';

const ButtonOrderProduct = props => {
    return (
        <button type={props.type} onClick={props.onClick} className={classes.btnOrderProduct}>
            {props.title}
        </button>
    )
}

export { ButtonOrderProduct };