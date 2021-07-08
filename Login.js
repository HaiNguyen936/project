import React from 'react'
import './Login.css'
import  { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <Link>
            <image className="login__logo" src="https://fptshop.com.vn/uploads/originals/2019/12/30/637133160350737542_201407171129187887_1378267132_fptshop-ver1-0-logo-color-bg-black.jpg" alt="logo"/>
            </Link>
            <div className="login__container">
                <h1>Sgin Up</h1>
                <from>
                    <h5>E-Mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button type="submit" className="login__signInButton">Sign In</button>
                </from>
                <p>By Sign in,you agree to Amazon</p>
                <button className= "login__registerButton">Create a new account</button>
            </div>
        </div>
       
    )
}

export default Login