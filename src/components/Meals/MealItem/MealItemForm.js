import {useRef,useState} from "react"
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"
const MealItemForm=(props)=>{
    const [amountIsValid,setAmountIsValid]=useState(true)
    const amountInputRef=useRef()
    const submitHandler=(event)=>{
        event.preventDefault()
        const enteredAmount=amountInputRef.current.value
        const enteredAmountNumber=+enteredAmount
        if(enteredAmount.trim().length===0  || enteredAmountNumber<1 || enteredAmountNumber>5){
            setAmountIsValid(false)
            return

        }
        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{
                id:"Amount",
                type:"Number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:"1"


            }}></Input>
            <button>+ Add</button>
            {!amountIsValid && <p>enter a valid amount</p>}
        </form>
    )

}
export default MealItemForm