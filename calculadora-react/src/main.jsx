import { StrictMode } from 'react' // se importa el componente StrictMode de React para envolver la aplicación y activar advertencias adicionales durante el desarrollo, ayudando a identificar problemas potenciales en el code  .
import { createRoot } from 'react-dom/client' 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // se crea la raíz de la aplicación utilizando createRoot y se renderiza el componente App envuelto en StrictMode para activar las advertencias adicionales durante el desarrollo
  <StrictMode>
    <App />
  </StrictMode>
)
