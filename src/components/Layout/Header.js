import React from "react";
import mealImg from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartBUtton from "./HeaderCartButton";
const Header = () => {
    return <> 
        <header className={classes.header}>
            <h1>ReactMeal</h1>
            <HeaderCartBUtton ></HeaderCartBUtton>
        </header>
        <div className={classes['main-image']} >
            <img src={mealImg} alt="A table full of delicious food" />
        </div>
    </>
};
export default Header;
