import React from 'react';
import classes from './Input.module.css';

const Input=React.forwardRef((props,ref)=>{
return(
    <div className={classes.input}>
    <label htmlFor={props.label.id}>{props.label}</label>
    <input ref={ref}
    id={props.input.id}
    {...props.input}
    />

    </div>
)
})//forward ref closing;

//in order to forward the ref forward it to ref to Input element

export default Input;