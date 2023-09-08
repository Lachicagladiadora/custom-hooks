import { useEffect, useState } from "react"

// component with custom hook

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

  type StateBarProps = {color: string, children: string}
  const StateBar=({color,children}: StateBarProps)=>{
    return <p style={{color:color}}>{children}</p>
  }
  
  type SaveButtonStateProps={background:string}
  const SaveButtonState=({background}:SaveButtonStateProps)=>{
    const isOnline  = useOnlineStatus()
    const onSaveClick = () => {
      console.log('✅ Progress saved')
    }
    return (
      <button disabled={!isOnline} onClick={onSaveClick} style={{background:background,color:'#fafb8b'}}>
        {isOnline ? 'Save progress' : 'Reconnecting...'}
      </button>
    )
  }

  return (
    <div
    style={{
      border:`solid 2px ${useOnlineStatus() ? 'green' :' red'}`,
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
      <p>OnlineStatusBar: second custom hook</p>
      <SaveButtonState background={`${useOnlineStatus() ? 'green' : 'red'}`}/>
      <StateBar color={`${useOnlineStatus() ? 'green' : 'red'}`}>{useOnlineStatus() ? '✅ Online' : '❌ Disconnected'}</StateBar>
    </div>
  )
}