import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useRouteError, NavLink } from 'react-router-dom'
import Home from './routes/home'
import Conectividad from './routes/conectividad'
import Root from './routes/root'
import Seguridad from './routes/seguridad'
import Domotica from './routes/domotica'
import Nosotros from './routes/nosotros'

function ErrorBoundary () {
  const error = useRouteError()

  return (
    <div>
      <h2>Error {error.status}, esta página no existe.</h2>
      <p>Porfavor ir a: <NavLink to='/'>Inicio</NavLink></p>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
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
