import React from 'react';
import classes from './ButtonSubmit.module.scss';
import iconBtnSubmit from '../../../../img/iconBtnSubmit.svg';

const ButtonSubmit = props => {
    return (
        <button type="submit" className={classes.btnSubmit}>
            <span>{props.title}</span>
            <img src={iconBtnSubmit} alt="Send"/>
        </button>
    )
}

export { ButtonSubmit };