import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fontsource/outfit"
import "@fontsource/roboto"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
