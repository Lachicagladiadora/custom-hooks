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
<<<<<<< HEAD
=======
      <div style={{
        border: 'solid 2px green',
        borderRadius: '5px',
        padding: '10px',
      }}>
        <h3>Passing event handlers to custom Hooks </h3>
        <label>
          Choose the chat room: {' '}
          <select value={roomId} onChange={e=>setRoomId(e.target.value)}>
            <option value="general">general</option>
            <option value="travel">travel</option>
            <option value="music">music</option>
          </select>
        </label>
        <hr/>
        <ChatRoom roomId={roomId}/>
      </div>
>>>>>>> refs/remotes/origin/main
    </>
  )
}

