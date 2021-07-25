import React,{Fragment,useState} from 'react';
import Header from './Component/MyLayout/Header.js';
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/Cart';
 
function App() {

  const [cartPopup,setCartPopup]=useState(false);
  
  const enableCartPopupHandler=()=>{
    setCartPopup(true);
  }
  
  const disableCartPopupHandler=()=>{
    setCartPopup(false);
  }

  const orderHandler=()=>{
    setCartPopup(false);
    alert('Thanks for placing Your Order!! ');
  }

  return (
    <Fragment>
      {console.log(cartPopup)};
      {cartPopup && <Cart onClose={disableCartPopupHandler} onOrder={orderHandler}/>}
      <Header onCartClick={enableCartPopupHandler}/> 
      <main>

        <Meals/>
      </main>
      
    </Fragment>
    
  )  
}
  
export default App;
