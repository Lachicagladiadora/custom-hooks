import { useEffect, useState } from "react"

export const StatusBar = () => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(()=>{
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
  }, [])

  return <h3>{isOnline ? '✅ Online' : '❌ Disconnected'}</h3>
}