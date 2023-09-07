import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'
import { FormComponent } from './components/FormComponent'
import { OnlineStatusBar } from './components/OnlineStatusBar'
import { SaveButton } from './components/SaveButton'
import { StatusBar } from './components/StatusBar'
import { ChatRoom } from './components/ChatRoom'


export const App = () => {
  const [roomId, setRoomId] = useState('general')

  return (
    <>
      <h1>Custom Hooks</h1>
      <Counter/>
      <StatusBar/>
      <SaveButton/>
      <OnlineStatusBar/>
      <FormComponent/>
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
    </>
  )
}

