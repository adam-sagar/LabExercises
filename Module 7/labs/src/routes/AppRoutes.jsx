import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Posts from "../pages/Posts"
import Dashboard from "../pages/Dashboard"

function AppRoutes(props) {

    return (

        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/posts" element={<Posts {...props} />} />

            <Route path="/dashboard" element={<Dashboard {...props} />} />
        </Routes>
    )
}

export default AppRoutes