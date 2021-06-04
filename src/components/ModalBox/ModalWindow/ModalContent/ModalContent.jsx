import React from 'react';
import classes from './ModalContent.module.scss';

const ModalContent = props => {
    return (
        <div className={classes.modalContent}>
            {props.children}
        </div>
    )
}

export { ModalContent };