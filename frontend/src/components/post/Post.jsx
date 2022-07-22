import { MoreVert } from '@mui/icons-material'
import React, { useContext, useEffect, useState } from 'react'
import './post.css'
import {Users} from '../../dummyData';
import axios from 'axios';
import {format} from 'timeago.js'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

function Post({post}) {
    const [like,setLike] = useState(post.likes.length);
    const [isLiked,setIsLiked] = useState(false);
    const [user,setUser]= useState({})
    const {user:currentUser} = useContext(AuthContext)
    
    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])
    
    
    const likeHandler = () =>{
        try {
           axios.put("/posts/"+post._id+ "/like",{userId:currentUser._id}) 
        } catch (error) {
            
        }
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked)
    }

 
    useEffect(()=>{
        const fetchUser = async () =>{
          const res = await  axios.get(`/users?userId=${post.userId}`);
          setUser(res.data)
        }
        fetchUser();
      },[post.userId])
    return (
        <div className="post">
            <div className="post__Wrapper">
                <div className="post__Top">
                    <div className="post__TopLeft">
                       <Link to={`profile/${user.username}`} className="link"> <img src={user.profilePicture || PF+"noAvatar.png"}alt="" className="post__ProfileImage" /></Link> 
                        <span className="post__Username">{user.username}</span>
                        <span className="post__Date">{format(post.createdAt)}</span>
                    </div>
                    <div className="post__TopRight">
                    <MoreVert/>
                    </div>
                </div>
                <div className="post__Center">
                    <span className="post__Text">{post?.desc}</span>
                    <img src= {user.profilePicture ? PF+post?.img : PF+'noAvatar.png' } alt="" className="post__Image" />
                </div>
                <div className="post__Bottom">
                    <div className="post__BottomLeft">
                        <img src={PF+"like2.jpg"} alt="" onClick={likeHandler} className="post__LikeIcon" />
                        <img src={PF+"love.jpg"} alt="" onClick={likeHandler} className="post__LikeIcon" />
                        <span className="post__LikeCounter">{like} people liked it</span>
                    </div>
                    <div className="post__BottomRight">
                        <span className="post__CommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
