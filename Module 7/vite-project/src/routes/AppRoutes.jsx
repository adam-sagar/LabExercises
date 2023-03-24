import { Routes, Route } from "react-router-dom"
import App from "../App"
import Counter from "../components/Counter"
import Login from "../components/Login"
import WindowResizer from "../components/WindowResizer"
import About from "../pages/About"
import Dashboard, {DashboardMessages, DashboardTasks} from "../pages/Dashboard"
import PageNotFound from "../pages/PageNotFound"

//special component containing all the possible routes for this app
//any props passed into AppRoutes will also be passed onto child components using {...props}
function AppRoutes(props) {

    return (

        // see https://reactrouter.com/en/main/components/routes for more info
        <Routes>
            {/* nested routes can be used for URLs like /home/tasks or where the parent component needs to render the children */}
            <Route exact path='/' element={<Dashboard {...props} />} >
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>

            <Route path='/about' element={<About {...props} />} />

            <Route path='/login' element={<Login {...props} />} />

            <Route path='/counter' element={<Counter {...props} />} />

            <Route path='/windowresizer' element={<WindowResizer {...props} />} />

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />            
        </Routes>
    )
}

//split up the components we have created so far and make different pages for them

export default AppRoutes