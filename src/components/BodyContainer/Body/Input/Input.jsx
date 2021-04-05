import React from 'react';
import classes from './Input.module.scss';

const Input = props => {
    return (
        <div className={`${classes.fieldBox} ${props.type === 'hidden' ? classes.hidden : ''}`}>
            {
                props.error &&
                <>  
                    <label className={`${classes.errorInfo}`}>Error</label>
                    <span className={classes.errorIcon}></span>
                </>
            }
            <input 
                type={props.type}  
                name={props.name}
                value={props.value}
                placeholder={props.placeholder} 
                onChange={props.onUpdateValue}
                onBlur={props.onTouchedValidate}
                className={`${classes.field} ${props.error ? classes.error : ''}`}
            />
            {
                props.error &&  
                <span className={`${classes.errorMessage}`}>
                    {
                        props.errorType.requiered ? props.isErrorMessage.requiered:
                        props.errorType.words ? props.isErrorMessage.words :
                        props.errorType.digits ? props.isErrorMessage.digits :
                        props.errorType.minLength ? props.isErrorMessage.minLength :
                        props.errorType.maxLength ? props.isErrorMessage.maxLength:
                        props.isErrorMessage.requiered
                    }
                </span>
            }
        </div>
    )
}

export { Input };