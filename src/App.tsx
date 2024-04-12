import React, { useEffect, useState } from 'react'
import './App.css'
import FirstRenderLanding from './components/firstRenderLanding/firstRenderLanding'
import CV from './pages/cv/cv'
import assertFirstRender from './methods/isFirstRender'
import { INotification } from './interfaces/notification'
import { NotificationContext } from './contexts/notificationContext'
import Notification from './components/notification/notification'
import "animate.css"

export default function App() {
  const [isFirstRender, setFirstRender] = useState<boolean>(assertFirstRender())
  const [notification, setNotification] = useState<INotification | undefined>(undefined)

  useEffect(() => {
    if (isFirstRender) {
      sessionStorage.setItem("firstRender", "nope")
    }
  }, [])

  useEffect(() => {
    console.log(notification)
    const timer = setTimeout(() => {
      notification && setNotification(undefined)
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [notification])

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      <div className='app'>
        {isFirstRender && <FirstRenderLanding setFirstRender={setFirstRender} />}
        <CV />
      </div>
      {notification && <Notification notification={notification} />}
    </NotificationContext.Provider>
  )
}