import React from 'react';

const Form = props => {
    return (
        <form name={props.name} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}

export { Form };