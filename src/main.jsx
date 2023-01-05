import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home'
import Conectividad from './routes/conectividad'
import Root from './routes/root'
import Seguridad from './routes/seguridad'
import Domotica from './routes/domotica'
import Nosotros from './routes/nosotros'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'conectividad',
        element: <Conectividad />
      },
      {
        path: 'seguridad',
        element: <Seguridad />
      },
      {
        path: 'domotica',
        element: <Domotica />
      },
      {
        path: 'nosotros',
        element: <Nosotros />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
