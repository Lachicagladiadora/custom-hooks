import { useEffect, useState } from "react"
import Toastify from "toastify-js"

type ChatRoomProps = {roomId: string}

type createConnectionProps = {serverUrl: string, roomId: string}

const showNotification = (message: string) => {
  Toastify({
    text: message,
    duration: 2000,
    gravity: 'bottom',
    position: 'right',
    style:{
      background: 'green',
      color: 'white',
      padding: '8px',
      borderRadius: '3px',
      height: '30px',
      position: 'absolute',
      bottom: '900px',
      right: '10px',
      zIndex:'1',
      width: '600px' ,

    }
  }).showToast()
}

const createConnection = ({serverUrl,roomId}: createConnectionProps) => {
  if(typeof serverUrl !== 'string'){
    throw Error('Expected serverUrl to be a string. Received: ' + serverUrl)
  }
  if(typeof roomId !== 'string'){
    throw Error('Expected roomId to be a string. Received: ' + roomId)
  }
  let intervalId: number | undefined
  let messageCallback: ((arg0: string) => void) | null
  return {
    connect(){
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...')
      clearInterval(intervalId)
      intervalId = setInterval(()=>{
        if(messageCallback){
          if(Math.random() > 0.5) {
            messageCallback('hey there, do you go ')
          } else {
            messageCallback('XD I will go...')
          }
        }
      }, 3000)
    },
    disconnect(){
      clearInterval(intervalId)
      messageCallback = null
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl + '')
    },
    onabort(event: string,callback: ((arg0: string) => void) | null){
      if(messageCallback){
      throw Error('Cannot add the handler twice.')
      }
      if(event !== 'message') {
        throw Error('Only "message" event is supported.')
      }
      messageCallback = callback
    }
  }
}

export const ChatRoom = ({roomId}:ChatRoomProps) => {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234')

  useEffect(()=>{
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    }
    const connection = createConnection(options)
    connection.onabort('message', (msg: string)=>{
      showNotification('New message: ' + msg)
    })
    connection.connect()
    return () => connection.disconnect()
  }, [roomId, serverUrl])
  return(
    <>
      <label>
        Server URL: 
        <input value={serverUrl} onChange={e=>setServerUrl(e.target.value)}/>
      </label>
      <h2>Welcome to the {roomId} room!</h2>
    </>
  )
}