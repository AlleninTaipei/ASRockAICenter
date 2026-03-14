import React from 'react'
import { ViteReactSSG } from 'vite-react-ssg'
import App from './App.jsx'
import './assets/global.css'

const routes = [
  {
    path: '/',
    element: <App />,
  },
]

export const createRoot = ViteReactSSG({ routes })
