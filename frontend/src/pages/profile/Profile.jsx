import React from 'react'
import './profile.css'
import Feed from '../../components/feed/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <>
            <Topbar/>
            <div className="profile">
                <Leftbar />
                <div className="profile__Right">
                    <div className="profile__RightTop">
                        <div className="profile__Cover">
                        <img src={PF+"1.jpg"} alt="" className="profile__CoverImage" />
                        <img src={PF+"pass (3).jpg" }alt="" className="profile__UserImage" />
                        </div>
                        <div className="profile__Info">
                            <h4 className="profile__InfoName">Prince adixsld</h4>
                            <span className="profile__InfoDesc">Hello my friends </span>
                        </div>
                    </div>
                    <div className="profile__RightBottom">
                    <Feed />
                    <Rightbar profile />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Profile
