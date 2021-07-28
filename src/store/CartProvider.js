import React,{useReducer} from 'react';
import CartContext from './cartcontext'

const defaultCartState={
    items:[],
    totalAmount:0,
    
}

const cartReducer=(state,action)=>{
    if (action.type==='ADD'){
        const new_item=state.items.concat(action.item);
       const new_totalAmount= state.totalAmount+(action.item.price*action.item.amount);
       console.log(action);
       return({
            items:new_item,
            totalAmount:new_totalAmount
    })
   
    }
   if( action.type==='REMOVE'){

   } 
     return defaultCartState;
};


const CartProvider=(props)=>{
const [cartState,dispatchAction]=useReducer(cartReducer,defaultCartState)
const addCartItemHandler=(item)=>{
    console.log('Dispatced');
    dispatchAction({
       type:'ADD',
       item:item
    });
}
const removeCartItemHandler=(item)=>{
    dispatchAction({
        type:'REMOVE',
        item:item
     });
}

//below is the state values that we will use now
const cartContext=(
{items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addCartItemHandler,
    removeItem:removeCartItemHandler
});

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;    