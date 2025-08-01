import Cart from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../Store/CartContext"
import { useContext } from "react"
const HeaderCartButton=(props)=>{
    const cartCtx=useContext(CartContext)
    const numberOfItems=cartCtx.items.reduce((currentNumber,item)=>{
        return currentNumber+item.amount
    },0)
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <Cart></Cart>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>

        </button>
    )

}

export default HeaderCartButton