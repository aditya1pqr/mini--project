import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componets/Header/Home/home.jsx'
import About from './componets/Header/About/About.jsx'
import Contact from './componets/Header/Contact/Contact.jsx'
import User from './componets/Header/User/user.jsx'
import Github from './componets/Header/Github/Github.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
      element:<Home/>

      }
      ,
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
      {
        path:"Github",
        element:<Github/>
      }
      
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
