import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { ThemeProvider } from './context/ThemeContext'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div className="App">
      <ThemeProvider>

        <NavBar />

        <AppRoutes />
        
        <Footer />

      </ThemeProvider>
    </div>
  )
}

export default App