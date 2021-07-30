import React,{useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cartcontext';
import CartItem from './CartItem';


const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
    const hasItem=cartCtx.items.length>0;

    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({...item,amount:1})
    };
    const cartItemRemoveHandler=(item)=>{
        cartCtx.removeItem({...item,amount:1})
    };

    const cartItems=(
<ul className={classes['cart-items']} className={classes.meals}>
{cartCtx.items.map((item)=>(
<CartItem  key={item.id} name={item.name} amount={item.amount} price={item.price} 
onAdd={cartItemAddHandler.bind(null,item)}
onRemove={cartItemRemoveHandler.bind(null,item)}/>
)
)}
</ul>);




const Amount_total=`Rs ${cartCtx.totalAmount.toFixed(2)}`;

return(
<Modal >
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>{Amount_total}</span>
    </div>
    <div className={classes.actions}>
    <button className={classes.actions['button--alt']} onClick={props.onClose}> Close</button>
    {  hasItem&&<button className={classes.button} onClick={props.onOrder}>Order
    </button>}

    </div>
</Modal>
)
}

export default Cart;