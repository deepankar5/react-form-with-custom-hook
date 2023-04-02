import { useState } from "react"

const useInput = (validate) => {
    const [enteredValue, setEnteredValue] = useState({})
    const [valueTouched, setValueTouched] = useState({})
    const [isInValid, setIsInValid] = useState({})

    const valueChangeHandler = (event) => {
        const {name, value} = event.target
        setEnteredValue((prevState) => ({...prevState, [name]: value}))
    }
    const valueTouchedChangeHandler = (event) => {
        const {name, value} = event.target
        setValueTouched((prevState) => ({...prevState, [name]: true}))
        if(validate[name](value) && setValueTouched?.name){
            setIsInValid((prevState)=> ({...prevState, [name]: true}))
        }else setIsInValid((prevState)=> ({...prevState, [name]: false}))
    }
    const reset = () => {
        setEnteredValue({})
        setIsInValid({})
        setValueTouched({})
    }

    return{
        value : enteredValue,
        valueTouched,
        valueChangeHandler, 
        valueTouchedChangeHandler,
        isInValid,
        reset
    }
}

export default useInput