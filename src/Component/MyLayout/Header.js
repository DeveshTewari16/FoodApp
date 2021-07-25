import React,{Fragment} from 'react';
import uiImages from "../UIImages/meals.jpg" ;
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Cart from "../Cart/Cart"

const Header=props=>{
    return(
<Fragment>
<header className={classes.header}>
<h1>Foody</h1>
<HeaderCartButton onClickCartHandler={props.onCartClick} />
</header>
<div className={classes['main-image']}>

    <img src={uiImages} alt="Meals">
    </img>
</div>

</Fragment>);
}

export default Header;