import React from 'react'
import './online.css'
function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="rightbar__OnlineFriend">
        <div className="rightbar__ProfileImageContainer">
            <img src= {PF+user.profilePicture} alt="" className="rightbar__ProfileImage" />
            <span className="rightbar__Online"></span>
        </div>
        <span className="rightbar__Username">{user.username}</span>
    </li>
    )
}

export default Online
