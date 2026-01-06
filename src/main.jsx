import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Web from './Web'


const path = createBrowserRouter([
  {
    path:'/',
    element:<Web/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={path}></RouterProvider>
  </StrictMode>,
)
