import React from "react"
import Clock from "../components/Clock"
import RenderEmojis from "../components/RenderEmojis"

function Home() {

    return (
        <div className="Home">
            <Clock />
            <RenderEmojis />
        </div>
    )
}

export default Home