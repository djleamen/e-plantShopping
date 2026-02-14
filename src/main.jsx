import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import Provider component to make Redux store available to all components
import { Provider } from 'react-redux'
// Import the Redux store that holds the application state
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap App with Provider to enable Redux store access throughout the app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
