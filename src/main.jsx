import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/Routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={routes}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
