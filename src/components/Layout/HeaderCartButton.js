import Cart from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../Store/CartContext"
import { useContext,useEffect,useState } from "react"
const HeaderCartButton=(props)=>{
    const [btnIsHighlighted,setBtnIsHighlighted]=useState(false)
    const cartCtx=useContext(CartContext)
    const numberOfItems=cartCtx.items.reduce((currentNumber,item)=>{
        return currentNumber+item.amount
    },0)
    const btnClasses=`${classes.button} ${btnIsHighlighted ? classes.bump : ""}`
    const {items}=cartCtx

    useEffect(()=>{
        if(items.length===0){
            return
        }
        setBtnIsHighlighted(true)
        setTimeout(()=>{
            setBtnIsHighlighted(false)

        },300)
    },[items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <Cart></Cart>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>

        </button>
    )

}

export default HeaderCartButton