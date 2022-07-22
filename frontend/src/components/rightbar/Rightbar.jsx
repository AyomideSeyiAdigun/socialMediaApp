import React, { useContext, useEffect, useState } from 'react'
import Online from '../onlinefriend/Online'
import './rightbar.css'
import {Users} from '../../dummyData'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@mui/icons-material';


function Rightbar({user}) {
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const [friends, setFriends]=useState( );
const {user:currentUser,dispatch} = useContext(AuthContext);
const  [followed,setFollowed] = useState(currentUser.followings.includes(user?._id));

 
useEffect(()=>{
    const getFriends = async () => {
        try{
            const friendList = await axios.get("/users/friends/"+user?._id);
            setFriends(friendList.data)
        }catch(err) {
            console.log(err)
        }
    }
    getFriends();
},[user]);
    const handleFollow = async () =>{
        try {
            if(followed){
                await axios.put("/users/"+user._id+"/unfollow",{userId:currentUser._id})
                dispatch({type:"UNFOLLOW",payload:user._id})
            }else{
                await axios.put("/users/"+user._id+"/follow",{userId:currentUser._id})
                dispatch({type:"FOLLOW",payload:user._id})
            }
        } catch (err){

        }
        setFollowed(!followed )
    }
    const HomeRightbar = () =>{
        return(
            <>
            {user?.username !== currentUser?.username && (
                <button 
                onClick={handleFollow} className="rightbar__followButton">
                    {followed ? "unfollow" : "follow  "}
                    {followed ? <Remove/> : <Add/>}
                 
                </button>
            )}
                 <div className="rightbar__BirthdayContainer">
                    <img src="/assets/gift.png" alt="" className="rightbar__BirthdayImage" />
                    <span className="rightbar__BirthdayText">
                        <strong>Pola foster </strong>and  <strong> 3 other friends </strong> have a birthday today
                    </span>
                </div>
                <img src="/assets/IMG_4065.JPG" alt="" className="rightbar__Ad" />
                <h4 className="rightbar__Title">Online friends</h4>
                <ul className="rightbar__OnlineFriendList">
                 { Users.map( u=>(< Online key={u.id} user={u}/> ) )}
                
                </ul>
            </>
        )
    };
    const ProfileRightbar = () => {
        return(
            <>
            <h4 className="rightbar__ProfileTitle">User Information</h4>
            <div className="rightbar__ProfileInfo">
                <div className="rightbar__ProfileInfoItem">
                    <span className="rightbar__ProfileInfoKey">City:</span>
                    <span className="rightbar__ProfileInfoValue">{user.city}</span>
                </div>
                <div className="rightbar__ProfileInfoItem">
                    <span className="rightbar__ProfileInfoKey">From:</span>
                    <span className="rightbar__ProfileInfoValue">{user.from}</span>
                </div>
                <div className="rightbar__ProfileInfoItem">
                    <span className="rightbar__ProfileInfoKey">Relationship:</span>
                    <span className="rightbar__ProfileInfoValue">{user.relationship ===1 ? "Single" : user.relationship ===2 ? "Married" : "-"}</span>
                </div>
            </div>
            <h4 className="rightbar__ProfileTitle">User Friends</h4>   
            <div className="rightbar__ProfileFollowings">
                {friends?.map((friend)=>(
            <Link className="link" to ={"/profile/"+friends.username}>
                <div className="rightbar__ProfileFollowing">
                    <img src={friends.profilePicture ? PF + friends.profilePicture : PF +"noAvatar"} alt="" className="rightbar__ProfileFollowingImage" />
                    <span className="rightbar__FollowingName">{friends.username}</span>
                </div>
            </Link> 
                ))}
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbar__Wrapper">
            { user ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}

export default Rightbar
