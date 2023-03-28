import React, { useEffect, useState } from "react"
import {Outlet} from "react-router-dom"
import {Link} from "react-router-dom"

function MorePosts() {

    return (
        <div>
            <h1>Some random posts I can't read</h1>
            <Outlet />
        </div>
    )
}

export default MorePosts