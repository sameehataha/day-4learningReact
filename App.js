import React from "react"
import style from "./style.css"
export default function App() {
   
    const [count, setCount] = React.useState(0)
      /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    function add() {
        // setCount(count + 1)
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        // setCount(count - 1)
        setCount(prevCount => prevCount - 1)
    }
    console.log("App component rendered")
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            {/*Passing state (count) from the parent component (App) to the child component (Count) as a prop */}
            <Count number={count}/>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}


