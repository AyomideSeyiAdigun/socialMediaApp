import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './register.css'
function Register() {
    const {user,isFetching,error,dispatch} = useContext(AuthContext)
    const email = useRef();
    const password = useRef();
    const username = useRef();
    const passwordTwo = useRef();
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(password.current.value !== passwordTwo.current.value){
            passwordTwo.current.setCustomValidity("Passwords do mot match")
        }else{
            const user ={
                username: username.current.value,
                email:email.current.value,
                password: password.current.value
            }
            try {
                await axios.post("/auths/register",user);
                navigate("/login",{replace:true})
                
            } catch (err) {
                
            }
        }
    }
    return (
        
        <>
        {user && (
            <Navigate to="/" replace={true} />
          )}
        <div className="register">
            <div className="register__Wrapper">
                <div className="register__Left">
                    <h3 className="register__Logo">PrinceadixSocial</h3>
                    <span className="register__Desc">Connect with friends and the world around you on PriceadixSocial.
                    </span>
                </div>    
                <div className="register__Right">
                    <form onSubmit={handleSubmit} className="register__Box">
                        <input placeholder="Username" type="text" 
                        ref={username}
                        minLength="6"
                        className="register__Input" />
                        <input placeholder="Email" type="email" 
                        ref={email}
                        type="email"
                        className="register__Input" />
                        <input placeholder="Password" type="password" 
                        type="password"
                        minLength="5"
                        ref={password}
                        className="register__Input" />
                        <input placeholder="Password  Again" type="password"
                        ref={passwordTwo}
                        className="register__Input" />
                        <button className="register__Button">Sign Up</button>
                        <Link to="/login" className="register__RegisterButton link"> Log into your  Account</Link>
                    </form>
                </div>    
            </div>            
        </div>
    </>
    )
}

export default Register
