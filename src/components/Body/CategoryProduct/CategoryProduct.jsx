import React from 'react';
import classes from './CategoryProduct.module.scss';

const CategoryProduct = props => {
    return (
        <p className={classes.categoryProduct}>
           {props.category}
        </p>
    )
}

export { CategoryProduct };