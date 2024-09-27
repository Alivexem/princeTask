import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div style={{background:'#FFFFFF',height:'100vh'}}>
        <div className='icons'>
        <Link to='/'>
        <FontAwesomeIcon icon={faTimes} />       
        </Link>
        </div>
        <h1 className='welcome'>Welcome back.</h1>
        <div style={{fontFamily:'sans-serif'}} className='cenButs'>
            <div className='authButs'>
                <img className='ics' style={{height:'18px', width:'18px'}} src='googleIcon.webp' alt='google icon' />
                <p className='tech'>Sign in with Google</p>
            </div>
            <div className='authButs'>
                <img className='ics' style={{height:'18px', width:'18px', borderRadius:'50%'}} src='facebookIcon.webp' alt='google icon' />
                <p className='tech'>Sign in with Facebook</p>
            </div>

            <div className='authButs'>
                <img className='ics' style={{height:'18px', width:'18px'}} src='apple.png' alt='google icon' />
                <p className='tech'>Sign in with Apple</p>
            </div>
            <div className='authButs'>
                <img className='ics' style={{height:'18px', width:'18px'}} src='twitterIcon.png' alt='google icon' />
                <p className='tech'>Sign in with X</p>
            </div>
            <div className='authButs'>
                <img className='ics' style={{height:'18px', width:'18px'}} src='mailicon.webp' alt='google icon' />
                <p className='tech'>Sign in with email</p>
            </div>


        </div>

        <p style={{fontFamily:'sans-serif', fontSize:'1rem', fontWeight:'bold'}} className='signLink'>No account? <Link to='/signup'><span style={{color:'#1B8919', fontWeight:'bold'}}>Create one</span></Link></p>


        <p className='trouble' style={{fontFamily:'sans-serif'}}>Forgot email or trouble signing in? <span style={{textDecoration:'underline',color:'gray'}}>Get help</span></p>
      
    </div>
  )
}

export default Login
