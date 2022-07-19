import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import './post.css'
import {Users} from '../../dummyData';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

function Post({post}) {
    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);

    const likeHandler = () =>{
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="post__Wrapper">
                <div className="post__Top">
                    <div className="post__TopLeft">
                        <img src={PF+Users.filter((u)=>u.id === post.userId)[0].profilePicture}alt="" className="post__ProfileImage" />
                        <span className="post__Username">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                        <span className="post__Date">{post.date}</span>
                    </div>
                    <div className="post__TopRight">
                    <MoreVert/>
                    </div>
                </div>
                <div className="post__Center">
                    <span className="post__Text">{post?.desc}</span>
                    <img src= {PF+post?.photo} alt="" className="post__Image" />
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
