import { PermMedia,Label,Room,EmojiEmotions, Cancel } from '@mui/icons-material'
import axios from 'axios'
import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './share.css'
function Share() {
    const {user}= useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file,setFile] = useState(null);
    const submitHandler = async (e) =>{
        e.preventDefault();
        const newPost ={
            userId:user._id,
            desc:desc.current.value
        }
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("file",file);
            data.append("name",fileName);
            newPost.img = fileName;
            try {
                await axios.post("/uploads",data)
            } catch (err) {
                console.log(err)
            }
        }
        try{
            await axios.post("/posts",newPost);
            window.location.reload()
        } catch(err){
 
        }
    }
    return (
        <div className="share">
            <div className="share__wrapper">
                <div className="share__Top">
                    <img src={user.profilePicture? PF + user.profilePicture :PF+"noAvatar.png  "} alt="" className="share__Image" />
                    <input ref={desc} placeholder={`what in your mind ${user.username}?` }
                    className="share__Input" />
                </div>
                <hr className="share__Hr"/>
                {file && (
                    <div className="share__ImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="share__Imagee" />
                        <Cancel className="share__CancelImage" onClick={()=>setFile(null)}/>
                    </div>
                )}
                <form className="share__Bottom" onSubmit={submitHandler}>
                    <div className="share__Options">
                        <label htmlFor="file"  className="share__Option">
                            <PermMedia htmlColor="tomato" className="share__Icon"/>
                            <span className="share__OptionText">Photo or Video</span>
                        <input style={{display:"none"}} type="file" id="file"
                        accept=".png,.jpeg, .jpg " 
                        onChange={(e)=>setFile(e.target.files[0])} />
                        </label>
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
                    <button className="share__Button"
                    type="submit">share</button>
                </form>
            </div>
        </div>
    )
}

export default Share
