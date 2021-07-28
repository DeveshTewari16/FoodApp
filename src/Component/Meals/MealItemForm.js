import React,{useState} from 'react'
import classes from './MealItemForm.module.css';
import Input from  '../UI/Input';
import {useRef } from 'react';

const MealItemForm=props=>{
    const [amountIsValid,setAmountIsValid]=useState(true);
    
    const amountInputRef=useRef();
    const submitHandler=(event)=>{
       console.log('Submit Clicked')
        const enteredAmount=amountInputRef.current.value;
       
        const enteredAmountNumber=+enteredAmount;
        console.log(enteredAmountNumber)
        if (enteredAmount.trim().length===0 ||enteredAmountNumber<1||enteredAmountNumber>5){
            setAmountIsValid(false);
        }
        props.onAddtoCart(enteredAmountNumber);
        event.preventDefault();
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label="Amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
            
            <button >+Add</button>
            {!amountIsValid && <p>Amount is Invalid</p>}
        </form> 
    )
}

export default MealItemForm
