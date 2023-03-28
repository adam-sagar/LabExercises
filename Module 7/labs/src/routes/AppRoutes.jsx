import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Posts from "../pages/Posts"
import Dashboard from "../pages/Dashboard"
import MorePosts from "../pages/MorePosts"
import Post from "../components/Post"
import MorePostsList from "../components/MorePostsList"


function AppRoutes(props) {

    return (

        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/posts" element={<Posts {...props} />} />
            <Route path="/moreposts" element={<MorePosts {...props} />} >
                <Route index element={<MorePostsList />} />
                <Route path=":id" element={<Post />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard {...props} />} />
        </Routes>
    )
}

export default AppRoutes