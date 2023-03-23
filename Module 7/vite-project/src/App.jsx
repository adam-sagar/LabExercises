import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Login from './components/Login'
import WindowResizer from './components/WindowResizer'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Counter />
        <WindowResizer />
        <Login />
      </ThemeProvider>
    </div>
  )
}

export default App