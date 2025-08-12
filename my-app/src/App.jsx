import React from 'react'
import Accordian from './components/accordian'
import UseState from './hooks/useState'
import UseEffect from './hooks/useEffect'
import UseRef from './hooks/useRef'
import UseMemo from './hooks/useMemo'
import Callback from './hooks/useCallbacks'

function App() {
  return (
    <>
    {/* <Accordian/>
    <UseState/>
    <UseEffect/>
    <UseRef/> */}

    <UseMemo/>
    <Callback/>
    </>
  )
}

export default App
