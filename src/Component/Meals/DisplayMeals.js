import React,{useState} from 'react';
import "./DisplayMeals.css";


const DisplayMeals=props=>{
    const [count,setCount]=useState(1);
    const [doDelete,setDoDelete]=useState(false);


     const deletebuttonHandler=()=>{
        
       if (count>0){
            setCount(count-1);
            
        }
        else{
            setDoDelete(false);
        }
     }

     const addbuttonHandler=()=>{
        setCount(count+1);
        setDoDelete(true);
     }

     const price=`Rs ${props.meals.price.toFixed(2)}`;
    
   return (
       <React.Fragment>

        <section className="dispMeals">
            <div>
            <h2>{props.meals.name}</h2>
            <div className="description"> {props.meals.description}</div>
            <div className="price"> {price}</div>
            </div>
            <div className="addRemoveItem">
                
            <button onClick={addbuttonHandler} className="buttons">+ Add</button>
            <span className="spancount" className="price">{count}</span>

            {doDelete&&<button onClick={deletebuttonHandler} className="buttons">- Remove</button>}
            </div>
        </section>
       </React.Fragment>
   )};

export default DisplayMeals;