import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div className='loading'/>}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Suspense>
)
