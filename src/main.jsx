import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Card } from './components/Card.jsx'
import { TestingApp } from './TestingApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestingApp />
  </StrictMode>
)
