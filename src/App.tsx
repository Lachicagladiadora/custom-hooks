import { useState } from 'react'
import './App.css'

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

export const App = () => {
  const {counter,increase, decrement, reset} = useCounter()
  const counterB = useCounter()

  return (
    <>
     <h1>Custom Hooks</h1>
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

