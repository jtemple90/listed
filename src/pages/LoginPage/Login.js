import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>

    <div className="login-container">
    
    <form>
    <h3>REALTOR LOGIN</h3>
      <input 
              type="email"
              name='email'
              placeholder='Your Email'
              className='login-input'
              value='johnDoe'
            />
        <input 
              type="password"
              name='password'
              placeholder='Enter Password'
              className='login-input'
              value='testuser'
            />
        <Link to='dashboard'>
          <button className='login-btn'>LOGIN</button>
        </Link>
    </form>        
            
    </div>
    </div>
  )
}

export default Login
