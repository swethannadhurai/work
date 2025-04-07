import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NewButton from './NewButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <hr />

    <App />
    <hr />

    <App />
    <hr />

    <App />
    <hr />

    <NewButton />
    <hr />

    <NewButton />
    <hr /> 

    <NewButton />
    <hr />

  </StrictMode>,
)
