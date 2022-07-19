import React from 'react'
import './friendlist.css'

function Friendlist({friend}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="leftbar__Friend">
        <img src={PF+friend.profilePicture} alt="" className="leftbar__FriendImage" />
        <span className="leftbar__FreindName">{friend.username}</span>
    </li>
    )
}

export default Friendlist
