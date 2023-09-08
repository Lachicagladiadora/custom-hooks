import './App.css'
import { Counter } from './components/Counter'
import { FormComponent } from './components/FormComponent'
import { OnlineStatusBar } from './components/OnlineStatusBar'
import { SaveButton } from './components/SaveButton'
import { StatusBar } from './components/StatusBar'
import { ChatRoom } from './components/ChatRoom'
import { useState } from 'react'


export const App = () => {
  const [roomId, setRoomId] = useState('general')

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

      <div style={{
        border: 'solid 2px green',
        borderRadius: '10px',
        padding: '10px',
        background:'#143414a1',
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
        <small><strong>open inspect please</strong></small>
      </div>
    </>
  )
}

