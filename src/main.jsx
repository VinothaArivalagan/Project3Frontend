import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'
import { BrowserRouter } from 'react-router-dom'
import SessionContextProvider from './Context/SessionContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
