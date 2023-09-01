import { useState } from "react"

export const Counter = () => {
  const useCounter = () => {
    const [counter, setCounter] = useState(0)
  
    const increase = () => setCounter(counter+1)
    const decrement = () => setCounter(counter+-1)
    const reset = () => setCounter(0)
  
    return{
      counter, 
      increase, 
      decrement,
      reset
    }
  }

  const {counter,increase, decrement, reset} = useCounter()
  const counterB = useCounter()

  return(
    <>
     <div>
      <div>{counter}</div>
      <button onClick={reset}>zero</button>
      <button onClick={increase}>+</button>
      <button onClick={decrement}>-</button>
     </div>
     <div>
      <div>{counterB.counter}</div>
      <button onClick={counterB.increase}>+</button>
     </div>
    </>
  )
}