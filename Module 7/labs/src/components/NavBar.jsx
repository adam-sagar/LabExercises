import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div className="NavBar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/moreposts">More Posts</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar