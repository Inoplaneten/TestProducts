import React from 'react';
import classes from './Preloader.module.scss';

const Preloader = props => {
    return (
        <div className={`${classes.preloader} ${props.isLoading ? classes.show : classes.hidden}`}>
            {props.children}
        </div>
    )
}

export { Preloader };