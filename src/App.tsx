import React, { useEffect, useState } from 'react'
import './App.css'
import FirstRenderLanding from './components/firstRenderLanding/firstRenderLanding'
import CV from './pages/cv/cv'
import assertFirstRender from './methods/isFirstRender'

export default function App() {
  const [isFirstRender, setFirstRender] = useState<boolean>(assertFirstRender())
  const [focus, setFocus] = useState<boolean>(false)

  useEffect(() => {
    if(isFirstRender) {
      sessionStorage.setItem("firstRender", "nope")
    }
  }, [])

  return (
    <div className='app'>
      {isFirstRender && <FirstRenderLanding setFocus={setFocus} setFirstRender={setFirstRender} />}
      <CV />
    </div>
  )
}