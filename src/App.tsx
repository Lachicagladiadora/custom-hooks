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

      <div style={{
        border: 'solid 2px #ff73e5de',
        borderRadius: '10px',
        textTransform: 'capitalize',
        display: 'flex',
        gap: '180px',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <StatusBar/>
        <SaveButton/>
      </div>
      
      <OnlineStatusBar/>
      <FormComponent/>
    </>
  )
}

