import { useEffect, useState } from "react"

// first example with state and useEffect
export const SaveButton = () => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    const onOnline = () => setIsOnline(true)
    const onOffline = () => setIsOnline(false) 
    
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    return ()=>{
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
    }
  }, [])

  const saveClick = () => console.log('✅ Progress saved')

  return (
    <button disabled={!isOnline} onClick={saveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  )
}