import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Card } from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card title='Titulo' text='Texto' buttonText='Boton' />
  </StrictMode>,
)
