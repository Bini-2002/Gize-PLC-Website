import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Force light mode (cleanup from previously persisted dark mode).
try {
  document.documentElement.classList.remove('dark');
  window.localStorage.removeItem('theme');
} catch {
  // no-op
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
