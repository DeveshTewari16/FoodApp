import React,{useReducer} from 'react';
import CartContext from './cartcontext'

const defaultCartState={
    items:[],
    totalAmount:0,
    
}

const cartReducer=(state,action)=>{
    if (action.type==='ADD'){
        
       
       const new_totalAmount= state.totalAmount+(action.item.price*action.item.amount);
       
       const exsistingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);
       const exsistingCartItem=state.items[exsistingCartItemIndex]
       let updatedItem;
       let updatedItems;
       //Lets check if item already exists then do not but lets just update state
       if(exsistingCartItem){
           //below updated item will contain all details of exsisting item 
           //along with new amount
           updatedItem={
               ...exsistingCartItem,
               amount:exsistingCartItem.amount+action.item.amount
           }
           updatedItems=[...state.items];
           updatedItems[exsistingCartItemIndex]=updatedItem;
       }
       else{
           updatedItems=state.items.concat(action.item);
       }
      
       return({
            items:updatedItems,
            totalAmount:new_totalAmount
    })
   
    }
   if( action.type==='REMOVE'){
    
   
    
       const exsistingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);
       const exsistingCartItem=state.items[exsistingCartItemIndex]
       let updatedItem;
       let updatedItems;
        let new_totalAmount_reduce=0;
       //Lets check if item already exists then do not but lets just update state
       if(exsistingCartItem){
           //below updated item will contain all details of exsisting item 
           //along with new amount
           updatedItem={
               ...exsistingCartItem,
               amount:exsistingCartItem.amount-action.item.amount
           }
           updatedItems=[...state.items];
          
           updatedItems[exsistingCartItemIndex]=updatedItem;
           new_totalAmount_reduce= state.totalAmount-(action.item.price*action.item.amount);
           
           if(exsistingCartItem.amount===1){
            updatedItems[exsistingCartItemIndex]=updatedItem;
            new_totalAmount_reduce= state.totalAmount-(action.item.price*action.item.amount);
            updatedItems=state.items.filter(item=>item.id!==action.item.id) 
        }
           
       }
    
    
       return({
            items:updatedItems,
            totalAmount:new_totalAmount_reduce
    })
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