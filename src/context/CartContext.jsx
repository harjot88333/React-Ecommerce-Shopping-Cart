import { createContext,useContext } from "react";
const CartContext = createContext();

import React from 'react'
import { initialProducts } from "../data/Product";

export const CartProvider = (props) => {
    const products = initialProducts;
  return (
    <CartContext.Provider value={{products}}>{props.children}</CartContext.Provider>
  )
}
export const useCart = () => useContext(CartContext)

