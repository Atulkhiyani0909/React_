import React from 'react'
import Accordian from './components/accordian'
import UseState from './hooks/useState'
import UseEffect from './hooks/useEffect'
import UseRef from './hooks/useRef'
// import UseMemo from './hooks/useMemo'
import Callback from './hooks/useCallbacks'
import Color from './components/change-clr'
import Rating from './components/load-data'
import Data from './components/load-data'
import QrCodeGen from './components/qrCode'
import Theme from './components/theme-changer'
import { createBrowserRouter ,RouterProvider} from "react-router";
import Bar from './bar'

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<div>
        <Bar/>
      </div>
    },
  {
    path:'/qrcode',
    element:<div>
        <Bar/>
        <QrCodeGen/>
      </div>
  },
  {
    path:'/accordian',
    element:<div>
        <Bar/>
        <Accordian/>
      </div>
  }
]
)

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
