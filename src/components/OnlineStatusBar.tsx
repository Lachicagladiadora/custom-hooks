import { useEffect, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const useOnlineStatus=()=>{
  const [isOnline, setIsOnline]= useState(true)
  useEffect(()=>{
    const onOnline=()=> setIsOnline(true)
    const onOffline=()=> setIsOnline(false)
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    return ()=>{
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
    }
  }, [])
  return isOnline
}

export const OnlineStatusBar = () => {
  const StateBar=()=>{
    const isOnline = useOnlineStatus()
    return <p>{isOnline ? '✅ Online' : '❌ Disconnected'}</p>
  }

  const SaveButtonState=()=>{
    const isOnline  = useOnlineStatus()
    const onSaveClick = () => {
      console.log('✅ Progress saved')
    }
    return (
      <button disabled={!isOnline} onClick={onSaveClick}>
        {isOnline ? 'Save progress' : 'Reconnecting...'}
      </button>
    )
  }

  return (
    <div
    style={{
      border:`solid 1px ${useOnlineStatus() ? 'green' :' red'}`,
      borderRadius: '10px',
      padding: '10px',
      margin: '20px',
      textTransform: 'capitalize',
      fontWeight:'bold',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <p>OnlineStatusBar: first custom hook</p>
      <SaveButtonState/>
      <StateBar/>
    </div>
  )
}