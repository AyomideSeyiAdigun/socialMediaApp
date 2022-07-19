import React from 'react'
import './register.css'
function Register() {
    return (
        <div className="register">
            <div className="register__Wrapper">
                <div className="register__Left">
                    <h3 className="register__Logo">PrinceadixSocial</h3>
                    <span className="register__Desc">Connect with friends and the world around you on PriceadixSocial.
                    </span>
                </div>    
                <div className="register__Right">
                    <div className="register__Box">
                        <input placeholder="Username" type="text" className="register__Input" />
                        <input placeholder="Email" type="email" className="register__Input" />
                        <input placeholder="Password" type="password" className="register__Input" />
                        <input placeholder="Password  Again" type="password" className="register__Input" />
                        <button className="register__Button">Sign Up</button>
                        <button className="register__RegisterButton">Log into your  Account</button>
                    </div>
                </div>    
            </div>            
        </div>
    )
}

export default Register
