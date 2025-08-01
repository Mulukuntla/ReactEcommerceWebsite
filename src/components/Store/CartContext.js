import React from "react"
const CartContext=React.createContext({
    items:[],
    totalAmount:2,
    addItem:()=>{},
    removeItem:()=>{}
})
export default CartContext