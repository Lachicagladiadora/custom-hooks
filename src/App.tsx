import './App.css'
import { Counter } from './components/Counter'
import { FormComponent } from './components/FormComponent'
import { OnlineStatusBar } from './components/OnlineStatusBar'
import { SaveButton } from './components/SaveButton'
import { StatusBar } from './components/StatusBar'



export const App = () => {
  

  return (
    <>
       <h1>Custom Hooks</h1>
      <Counter/>
      <StatusBar/>
      <SaveButton/>
      <OnlineStatusBar/>
      <FormComponent/>
    </>
  )
}

