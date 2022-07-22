import React from 'react'
import { useRef } from 'react';
import './login.css'
import {loginCall} from '../../apiCalls'
import { useContext } from 'react';
import { AuthContext} from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';
import { Navigate } from 'react-router-dom';
 
function Login() {
    const email = useRef();
    const password = useRef();
    const {user,isFetching,error,dispatch} = useContext(AuthContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
         loginCall({email:email.current.value,password:password.current.value},dispatch);
         console.log(user)
    }
    return (
        <>
        {user && (
            <Navigate to="/" replace={true} />
          )}
        <div className="login">
            <div className="login__Wrapper">
                <div className="login__Left">
                    <h3 className="login__Logo">PrinceadixSocial</h3>
                    <span className="login__Desc">Connect with friends and the world around you on PriceadixSocial.
                    </span>
                </div>    
                <div className="login__Right">
                    <form onSubmit={handleSubmit} className="login__Box">
                        <input placeholder="Email" type="email" required  ref = {email}className="login__Input" />
                        <input placeholder="Password" type="password" required minLength="5" ref={password} className="login__Input" />
                        <button disabled={isFetching} className="login__Button" > Log in</button>
                        <span className="login__Forgot">Forgot Password?</span>
                        <button disabled={isFetching}  className="login__RegisterButton">Create a new Account</button>
                    </form> 
                </div>    
            </div>            
        </div>
    </>
    )
}

export default Login
