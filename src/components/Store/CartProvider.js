import CartContext from "./CartContext"
const CartProvider=(props)=>{
    const addItemToCartHandler=()=>{

    }
    const removeItemToCartHandler=()=>{

    }
    const cartContext={
        items:[],
        totalAmount:2,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler
        
    }
    return (
        <CartContext.Provider value={cartContext}>{props.children}

        </CartContext.Provider>
        
    )

}
export default CartProvider