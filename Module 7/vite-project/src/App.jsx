import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { MyThemeProvider } from './context/MyThemeContext'
import { ThemeProvider } from "@mui/material/styles"
import { UserProvider } from './context/MyUserContext'
import AppRoutes from './routes/AppRoutes'
import NavBarBootstrap from './components/NavBarBootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorBoundary } from "react-error-boundary"
import ErrorMessage from './components/ErrorHandler'
import {purpleTheme} from './themes/PurpleTheme'


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={purpleTheme}>
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