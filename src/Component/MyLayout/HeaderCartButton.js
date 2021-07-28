import React,{useContext} from 'react';
import classes from './headercartbutton.module.css'
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cartcontext'


const HeaderCartButton=(props)=>{
    console.log('Inside header cart button')
    const ctx =useContext(CartContext);
    const totalItemCtx=ctx.items.reduce((curNumber,item)=>{
        return (curNumber+item.amount);
    }
    ,0);

    return (
        <button className={classes.button} onClick={props.onClickCartHandler} >
        <span className={classes.icon}>
        <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge} >{totalItemCtx}</span>
        </button>
    );
}

export default HeaderCartButton;