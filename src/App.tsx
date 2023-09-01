import './App.css'
import { Counter } from './components/Counter'
import { SaveButton } from './components/SaveButton'
import { StatusBar } from './components/StatusBar'



export const App = () => {
  

  return (
    <>
       <h1>Custom Hooks</h1>
      <Counter/>
      <StatusBar/>
      <SaveButton/>
    </>
  )
}

