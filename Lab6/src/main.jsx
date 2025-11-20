import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UdemyLandingPage from './UdemyLandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UdemyLandingPage />
  </StrictMode>,
)
