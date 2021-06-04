import React from 'react';
import classes from './ModalWindow.module.scss';

const ModalWindow = props => {
    return (
        <div className={classes.modalWindow} onClick={props.onClick}>
            <button type="button" className={classes.btnCloseModal} onClick={props.closeModal}></button>
            {props.children}
        </div>
    )
}

export { ModalWindow };