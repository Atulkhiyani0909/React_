import React from 'react'
import './App.css'
import Basic from './components/basic'
import Password from './components/password'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Navbar from './components/navbar.jsx'
import Contact from './components/contact.jsx'
import User from './components/user.jsx'
import Login from './components/login.jsx'
import Profile from './components/profile.jsx'
import Page from './components/page.jsx'
import { ToggleProvider } from './context/themeToggleProvider.jsx'
import BtnToggle from './components/BtnToggle.jsx'
import Todo from './components/todo/todo.jsx'
import Redux from './components/redux.jsx'


// Best for large scale project

// const Home = React.lazy(() => import("./pages/Home"));
// const About = React.lazy(() => import("./pages/About"));
// const Contact = React.lazy(() => import("./pages/Contact"));

function App() {
  
  // const router=createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<Layout/>,
  //     children:[
  //       {
  //         path:"",
  //         element:<Home/>
  //       },
  //       {
  //         path:'about',
  //         element:<About/>
  //       }
  //     ]
  //   }
  // ])

const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route  index element={<Home/>}></Route>
         <Route path='about' element={<About/>}>
         <Route path='pass' element={<Password/>}></Route>
         </Route>
          <Route  path='contact' element={<Contact/>}></Route>
          <Route path='User/:id' element={<User/>}></Route>
          <Route path='login' element={<Login/>}></Route>
           <Route path='profile' element={<Profile/>}></Route>
          <Route path='*' element={<>Not Found</>}></Route>
      </Route>
      // loader in route this helps to load the page data from api before clicking it 
    )
  )

  return (
    <>
    {/* <Basic/> */}
    {/* <Password/> */}
    {/* <RouterProvider router={router}/> */}

    {/* <ToggleProvider>
      <Page/>
    </ToggleProvider> */}

    {/* <Todo/> */}
    <Redux/>
    </>
  )
}

export default App
