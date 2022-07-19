 
import React from 'react'
import Feed from '../../components/feed/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import './home.css'
function Home() {
    return (
        <>
        <Topbar/>
        <div className="home__Container">
            <Leftbar /> 
            <Feed />
            <Rightbar />
        </div>
        </>
    )
}

export default Home
