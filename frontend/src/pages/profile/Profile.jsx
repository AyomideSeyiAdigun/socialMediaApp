import React, { useContext, useEffect, useState } from 'react'
import './profile.css'
import Feed from '../../components/feed/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    let { username } = useParams();
    const [user,setUser]= useState({})
 
    useEffect(()=>{
        const fetchUser = async () =>{
          const res = await  axios.get(`/users?username=${username}`);
          setUser(res.data)
        }
        fetchUser();
      },[username])
    return (
        <>
            <Topbar/>
            <div className="profile">
                <Leftbar />
                <div className="profile__Right">
                    <div className="profile__RightTop">
                        <div className="profile__Cover">
                        <img src={user.coverPicture ? user.coverPicture : PF+"noBackground.jpg"} alt="" className="profile__CoverImage" />
                        <img src={user.profilePicture ? user.profilePicture : PF+"noAvatar.png" }alt="" className="profile__UserImage" />
                        </div>
                        <div className="profile__Info">
                            <h4 className="profile__InfoName">{user.username}</h4>
                            <span className="profile__InfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profile__RightBottom">
                    <Feed username={username} />
                    <Rightbar user={user} />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Profile
