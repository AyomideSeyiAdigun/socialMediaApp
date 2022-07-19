import React from 'react'
import './leftbar.css'
import {RssFeed,School,Event,WorkOutline,HelpOutline,Bookmark,Group,PlayCircleFilledOutlined,Chat } from '@mui/icons-material'
import Friendlist from '../friendlist/Friendlist'
import {Users} from '../../dummyData'
function Leftbar() {
    return (
        <div className="leftbar">
           <div className="leftbar__wrapper">
               <ul className="leftbar__List">
                    <li className="leftbar__ListItem">
                        <RssFeed className="leftbar__Icon"/> 
                        <span className="leftbar__ListItemText">Feed</span>
                    </li>
                    <li className="leftbar__ListItem">
                        <Chat className="leftbar__Icon"/> 
                        <span className="leftbar__ListItemText">Chats</span>
                    </li>
                    <li className="leftbar__ListItem">
                        <PlayCircleFilledOutlined className="leftbar__Icon"/> 
                        <span className="leftbar__ListItemText">Videos</span>
                    </li>
                    <li className="leftbar__ListItem">
                        <Group className="leftbar__Icon"/> 
                        <span className="leftbar__ListItemText">Groups</span>
                    </li>
                    <li className="leftbar__ListItem">
                        <Bookmark className="leftbar__Icon"/> 
                        <span className="leftbar__ListItemText">Bookmarks</span>
                    </li>
                    <li className="leftbar__ListItem">
                        <HelpOutline className="leftbar__Icon"/> 
                        <span className="leftbar__ListItemText">Questions</span>
                    </li>
                    <li className="leftbar__ListItem">
                        <WorkOutline className="leftbar__Icon"/> 
                        <span className="leftbar__ListItemText">Jobs</span>
                    </li>
                    <li className="leftbar__ListItem">
                        <Event className="leftbar__Icon"/> 
                        <span className="leftbar__ListItemText">Events</span>
                    </li>
                    <li className="leftbar__ListItem">
                        <School className="leftbar__Icon"/> 
                        <span className="leftbar__ListItemText">Courses</span>
                    </li>
               </ul>
               <button className="leftbar__Button">show more</button>
               <hr className="leftbar__Hr" />
               <ul className="leftbar__FriendList">
                 {Users.map(f=>(<Friendlist key={f.id} friend={f}/>))  }
               </ul>
           </div>
        </div>
    )
}

export default Leftbar
