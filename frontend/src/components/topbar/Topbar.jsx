import { Search,Person, Chat, Notifications } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'
function Topbar() {
    return (
        <div className="topbar__Container">
            <div className="topbar__Left">
              <Link className="link" to="/">  <span className="topbar__Logo">PrinceadixSocial</span></Link>
            </div>
            <div className="topbar__Center">
                <div className="topbar__Searchbar">
                    <Search className="topbar__SearchbarIcon"/>
                    <input placeholder="Search for friend, post or video" className="topbar__SearchInput" />
                </div>
            </div>
            <div className="topbar__Right">
                <div className="topbar__Links">
                    <span className="topbar__Link">Homepage</span>
                    <span className="topbar__Link">Timeline</span>
                </div>
                <div className="topbar__Icons">
                    <div className="topbar__IconItem">
                        <Person />
                        <span className="topbar__IconBadge">1</span>
                    </div> <div className="topbar__IconItem">
                        <Chat />
                        <span className="topbar__IconBadge">4</span>
                    </div> <div className="topbar__IconItem">
                        <Notifications />
                        <span className="topbar__IconBadge">14</span>
                    </div>
                </div>
                <img src="/assets/pass (3).jpg" alt="" className="topbar__Image" />
            </div>

        </div>
    )
}

export default Topbar
