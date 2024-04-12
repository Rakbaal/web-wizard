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
import Studies from './pages/studies/studies.tsx'
import Realisations from './pages/realisations/realisations.tsx'
import MotivationLetter from "./pages/motivationLetter/motivationLetter.tsx"

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
    element: <Realisations />
  },
  {
    path: "/studies",
    element: <Studies />
  },
  {
    path: "/motivation-letter/:code",
    element: <MotivationLetter />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
