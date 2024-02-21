import React from 'react'
import '../Login/Login.css';
import { Link } from 'react-router-dom'; 
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
function RegisterPage() {
  return (
    <div className='body-l'><div className='wrapper'>
        <form action=''>
            <h1>Sign Up</h1>
            <div className='input-box'>
                <input type='email' placeholder='Mail' required/>
                <IoMail  className='icon'/>
            </div>
            <div className='input-box'>
                <input type='text' placeholder='Username' required/>
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required/>
                <FaLock className='icon'/>
            </div>
            <button type='submit'>Sign Up</button>
            <div className='register-link'>
                <p>Already have an account? <Link to='/Login'>Log in</Link></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default RegisterPage