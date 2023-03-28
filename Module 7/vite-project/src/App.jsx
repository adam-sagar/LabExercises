import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import AppRoutes from './routes/AppRoutes'
import NavBarBootstrap from './components/NavBarBootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorBoundary } from "react-error-boundary"
import ErrorMessage from './components/ErrorHandler'


function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>

          {/* <NavBar /> */}
          <NavBarBootstrap />

          <ErrorBoundary FallbackComponent={ErrorMessage}>
            <AppRoutes />
          </ErrorBoundary>

          <Footer />

        </UserProvider>
      </ThemeProvider>
    </div>
  )
}

export default App