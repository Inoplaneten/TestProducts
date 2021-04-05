import React from 'react';
import classes from './ModalBox.module.scss';

const ModalBox = props => {
    return (
        <div className={`${classes.modalBox} ${props.isActive ? classes.show : ''}`} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export { ModalBox };