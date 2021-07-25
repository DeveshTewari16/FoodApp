import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import { tsPropertySignature } from '@babel/types';

const Cart=(props)=>{

    const cartItems=(
<ul className={classes['cart-items']}>
{[{id:'1',name:'Aloo Paratha',amount:1,price:30.99}].map((item)=>(
<li key={item.key}>
{item.name}
</li>
)
)}
</ul>);

return(
<Modal >
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>35</span>
    </div>
    <div className={classes.actions}>
    <button className={classes.actions['button--alt']} onClick={props.onClose}> Close</button>
    <button className={classes.button} onClick={props.onOrder}>Order
    </button>

    </div>
</Modal>
)
}

export default Cart;