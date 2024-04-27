import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Raots from './Raots/Raots.jsx'
import Auothprovhider from './components/AuothProvider/Auothprovhider.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auothprovhider>
    <HelmetProvider>
    <RouterProvider router={Raots}></RouterProvider>
    </HelmetProvider>
  </Auothprovhider>
  </React.StrictMode>,
)
