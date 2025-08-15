import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './context/userContextProvider.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
<Provider store={store}>
<UserContextProvider>
    <App />
</UserContextProvider>
</Provider>
)
