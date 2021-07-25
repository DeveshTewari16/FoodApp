import React,{Fragment} from 'react';
import classes from './headercartbutton.module.css'
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton=props=>{

    return (
        <button className={classes.button} onClick={props.onClickCartHandler} >
        <span className={classes.icon}>
        <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
        </button>
    );
}

export default HeaderCartButton;