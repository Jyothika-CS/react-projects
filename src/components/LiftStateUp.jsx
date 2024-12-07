import { useState } from "react"

export const LiftStateUp =() => {
    const [inputValue, setInputVale] = useState("");

    return (<>
        <InputComponent inputValue={inputValue} setInputVale={setInputVale}/>
        <DisplayComponent inputValue={inputValue}/>
    </>)
}

const InputComponent = ({inputValue, setInputVale}) => {
    return (
        <>
            <input 
                type="text" 
                placeholder="enter your name" 
                value={inputValue}
                onChange={(e) => setInputVale(e.target.value)}
            ></input>
        </>
    )
}

const DisplayComponent = ({inputValue}) => {
    return <p>The current input value is: {inputValue}</p>
}