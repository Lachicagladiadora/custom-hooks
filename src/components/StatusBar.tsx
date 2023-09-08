import { useEffect, useState } from "react"

// first example with state and useEffect 
export const StatusBar = () => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(()=>{
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
  }, [])

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <h3>component: StatusBar</h3>
      <h3 style={{color: `${isOnline ? 'green' : 'red'}`}}>
        {isOnline ? '✅ Online' : '❌ Disconnected'}
      </h3>
    </div>
  )
}