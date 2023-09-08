import { useEffect, useState } from "react"

// second example with state and useEffect
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
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <h3>component: SaveButton</h3>
      <button disabled={!isOnline} onClick={saveClick} style={{background:`${!isOnline ? 'red' : 'green'}`,color:'#fafb8b'}}>
        {isOnline ? 'Save progress' : 'Reconnecting...'}
      </button>
    </div>
  )
}