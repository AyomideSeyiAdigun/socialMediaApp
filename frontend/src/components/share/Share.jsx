import { PermMedia,Label,Room,EmojiEmotions } from '@mui/icons-material'
import React from 'react'
import './share.css'
function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="share">
            <div className="share__wrapper">
                <div className="share__Top">
                    <img src={PF+"pass (3).jpg"} alt="" className="share__Image" />
                    <input placeholder="what in your mind princeadix?" className="share__Input" />
                </div>
                <hr className="share__Hr"/>
                <div className="share__Bottom">
                    <div className="share__Options">
                        <div className="share__Option">
                            <PermMedia htmlColor="tomato" className="share__Icon"/>
                            <span className="share__OptionText">Photo or Video</span>
                        </div>
                        <div className="share__Option">
                            <Label htmlColor="blue" className="share__Icon"/>
                            <span className="share__OptionText">Tag</span>
                        </div>
                        <div className="share__Option">
                            <Room htmlColor="green" className="share__Icon"/>
                            <span className="share__OptionText">Location</span>
                        </div>
                        <div className="share__Option">
                            <EmojiEmotions htmlColor="goldenrod" className="share__Icon"/>
                            <span className="share__OptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="share__Button">share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
