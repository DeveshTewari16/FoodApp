import React from 'react';
import "./Card.css";

const Card=props=>{
   return <section className="card">
       {props.children}
    </section>
}

export default Card;