import { Outlet } from 'react-router-dom'

function PostParent() {
    return (
        <div className="Posts">
            <p>These route paths are all post related</p>
            <Outlet />
        </div>
    )
}

export default PostParent