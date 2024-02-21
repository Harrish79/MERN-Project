import React from 'react'
import '../Login/Login.css';
import { IoMail } from "react-icons/io5";
function ForgotPassword() {
    return (
        <div className='body-l'><div className='wrapper'>
            <form action=''>
                <h1>Forgot Password</h1>
                <div className='input-box'>
                    <input type='email' placeholder='Username' required/>
                    <IoMail className='icon'/>
                </div>
                <button type='submit'>Reset Password</button>
            </form>
        </div>
        </div>
      )
}

export default ForgotPassword