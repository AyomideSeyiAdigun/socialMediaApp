import React from 'react'
import Online from '../onlinefriend/Online'
import './rightbar.css'
import {Users} from '../../dummyData'

function Rightbar({profile}) {
    const HomeRightbar = () =>{
        return(
            <>
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
                    <span className="rightbar__ProfileInfoValue">New York</span>
                </div>
                <div className="rightbar__ProfileInfoItem">
                    <span className="rightbar__ProfileInfoKey">From:</span>
                    <span className="rightbar__ProfileInfoValue">Madrid</span>
                </div>
                <div className="rightbar__ProfileInfoItem">
                    <span className="rightbar__ProfileInfoKey">Relationship:</span>
                    <span className="rightbar__ProfileInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbar__ProfileTitle">User Friends</h4>    
            <div className="rightbar__ProfileFollowings">
                <div className="rightbar__ProfileFollowing">
                    <img src="/assets/pass (3).jpg" alt="" className="rightbar__ProfileFollowingImage" />
                    <span className="rightbar__FollowingName">John Carter</span>
                </div>
                <div className="rightbar__ProfileFollowing">
                    <img src="/assets/pass (4).jpg" alt="" className="rightbar__ProfileFollowingImage" />
                    <span className="rightbar__FollowingName"> Maut Derpe</span>
                </div>
                <div className="rightbar__ProfileFollowing">
                    <img src="/assets/pass (5).jpg" alt="" className="rightbar__ProfileFollowingImage" />
                    <span className="rightbar__FollowingName">Laksd Basedd</span>
                </div>
                <div className="rightbar__ProfileFollowing">
                    <img src="/assets/1.jpg" alt="" className="rightbar__ProfileFollowingImage" />
                    <span className="rightbar__FollowingName">James Kane</span>
                </div>
                <div className="rightbar__ProfileFollowing">
                    <img src="/assets/2.jpg" alt="" className="rightbar__ProfileFollowingImage" />
                    <span className="rightbar__FollowingName">Outred Tyasd</span>
                </div>
                <div className="rightbar__ProfileFollowing">
                    <img src="/assets/3.jpg" alt="" className="rightbar__ProfileFollowingImage" />
                    <span className="rightbar__FollowingName">Gafsde Xased</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbar__Wrapper">
            { profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}

export default Rightbar
