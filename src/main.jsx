import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import "./style/layout.scss"
import "./style/button.scss"
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Contact from './pages/contact/contact.tsx'
import Experiences from './pages/experiences/experiences.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/experiences",
    element: <Experiences />
  },
  {
    path: "/realisations",
    element: <div>REALISATIONS</div>
  },
  {
    path: "/studies",
    element: <div>ETUDES</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
