import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { shopStore } from './store/reducer.js'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={shopStore}>
            <App />
        </Provider>
    </BrowserRouter>
);
