import React, { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, updatedTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    const existingCartItemIndex = items.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    const existingCartItem = items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedQuantity = existingCartItem.quantity + item.quantity;
      const updatedItem = {
        ...existingCartItem,
        quantity: updatedQuantity,
      };
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...items, item];
    }
    const updatedAmount = totalAmount + item.price * item.quantity;
    updateItems(updatedItems);
    updatedTotalAmount(updatedAmount);
  };

  const removeItemFromCartHandler = (id) => {
    const existingCartItemIndex = items.findIndex((item) => item.id === id);
    const existingCartItem = items[existingCartItemIndex];
    if (existingCartItem.quantity === 1) {
      const updatedItems = items.filter((item) => item.id !== id);
      updateItems(updatedItems);
    } else {
      const updatedItem = { 
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      const updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
      updateItems(updatedItems);
    }
    const removedItem = items.find((item) => item.id === id);
    const updatedAmount = totalAmount - removedItem.price;
    updatedTotalAmount(updatedAmount);
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
