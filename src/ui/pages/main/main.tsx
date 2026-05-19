import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import AppRoutes from '../../router/AppRoutes.tsx'

const rootElement = document.getElementById('root')
if (!rootElement) {
    throw new Error('Elemento com id "root" não encontrado no HTML')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
