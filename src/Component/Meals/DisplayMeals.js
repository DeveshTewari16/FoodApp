// import React,{useState} from 'react';
import React,{useContext} from 'react';
import MealItemForm from './MealItemForm';
import classes from './DisplayMeal.module.css';
import CartContext from '../../store/cartcontext';

const DisplayMeals=props=>{
    // const [count,setCount]=useState(1);
    // const [doDelete,setDoDelete]=useState(false);


    //  const deletebuttonHandler=()=>{
        
    //    if (count>0){
    //         setCount(count-1);
            
    //     }
    //     else{
    //         setDoDelete(false);
    //     }
    //  }

    //  const addbuttonHandler=()=>{
    //     setCount(count+1);
    //     setDoDelete(true);
    //  }

    const ctx = useContext(CartContext);

     const price=`Rs ${props.meals.price.toFixed(2)}`;

     const addToCartHandler=(amountFromMealItemForm)=>{
        ctx.addItem({
            id:props.meals.id,   
            name:props.meals.name,
            amount:amountFromMealItemForm,
            price:props.meals.price
        });
        console.log('Inside Add to cart-' )
        
     }
    
   return (
       <React.Fragment>
           <section className={classes.meal}>
            <div >
            <h2>{props.meals.name}</h2>
            <div className={classes.description}> {props.meals.description}</div>
            <div className={classes.price}> {price}</div>
            </div>
            <div className="addRemoveItem">
                
            <MealItemForm  onAddtoCart={addToCartHandler}/>
            </div>
            </section>
       </React.Fragment>
   )};

export default DisplayMeals;