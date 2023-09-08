import { useState } from "react"

// first custom hook
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
    <div style={{
      border: 'solid 2px #ff7373de',
      borderRadius: '10px',
      padding: '10px',
      margin: '20px',
      textTransform: 'capitalize',
      display: 'flex',
      gap: '80px',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <p> counter: <small>first custom hook</small> </p>
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
    </div>
  )
}