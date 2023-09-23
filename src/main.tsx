import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import {BrowserRouter} from "react-router-dom"

import {TodoProvider} from "./store/todos.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <TodoProvider>
    <App />
    </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>
)
