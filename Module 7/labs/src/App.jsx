import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { MoodProvider } from './context/EmojiContext'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div className="App">
      <MoodProvider>

        <NavBar />

        <AppRoutes />

        <Footer />

      </MoodProvider>
    </div>
  )
}

export default App
