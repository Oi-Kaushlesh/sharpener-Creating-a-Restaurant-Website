import React, { useState, useContext } from "react";
import classes from './MealItemForm.module.css'
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm =(props) => {
    const [quantity, setQuantity] = useState(1); // Default quantity is 1
    const cartcntx = useContext(CartContext);

    const addItemToCart = (event) => {
        event.preventDefault();
        cartcntx.addItem({...props.item, quantity : quantity});
    };

    const handleInputChange = (event) => {
        setQuantity(+event.target.value);
    };

    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount_' + props.id,
                type: "number",
                min: '1',
                max: '5',
                step: '1',
                value: quantity, // Set input value to quantity state
                onChange: handleInputChange // Handle input change
            }} />
            <button onClick={addItemToCart}>+ Add</button>
        </form>
    );
};

export default MealItemForm;
