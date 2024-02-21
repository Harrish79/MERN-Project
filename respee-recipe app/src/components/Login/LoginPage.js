import React from 'react'
import '../Login/Login.css';
import { Link } from 'react-router-dom'; 
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
function LoginPage() {
  return (
    <div className='body-l'><div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required/>
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required/>
                <FaLock className='icon'/>
            </div>
            <div className='remember-forgot'>
                <Link to='/Forgotpassword'>Forgot password</Link>
            </div>
            <button type='submit'>Login</button>
            <div className='register-link'>
                <p>Don't have an account? <Link to='/Register'>Sign up</Link></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default LoginPage