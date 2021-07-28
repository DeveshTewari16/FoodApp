import React,{useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cartcontext';
import { isDoWhileStatement } from '@babel/types';

const Cart=(props)=>{
    const cartCtx=useContext(CartContext);

    const cartItems=(
<ul className={classes['cart-items']} className={classes.meals}>
{cartCtx.items.map((item)=>(
<li key={item.key} className={classes.list}>
{item.name}
<li>{item.price}
</li>
<li>{item.amount}
</li>
</li>
)
)}
</ul>);

return(
<Modal >
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
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