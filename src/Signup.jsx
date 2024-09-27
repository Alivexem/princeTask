import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Signup = () => {
  return (
    <div style={{background:'#FFFFFF',height:'100vh'}}>
        <div className='icons'>
        <Link to='/'>
        <FontAwesomeIcon icon={faTimes} />       
        </Link>
        </div>
        <h1 className='welcome'>Join Guru.</h1>
        <div style={{fontFamily:'sans-serif'}} className='cenButs'>
            <div className='authButs'>
                <img className='ics' style={{height:'18px', width:'18px'}} src='googleIcon.webp' alt='google icon' />
                <p className='tech'>Sign up with Google</p>
            </div>
            <div className='authButs'>
                <img className='ics' style={{height:'18px', width:'18px', borderRadius:'50%'}} src='facebookIcon.webp' alt='google icon' />
                <p className='tech'>Sign up with Facebook</p>
            </div>

            <div className='authButs'>
                <img className='ics' style={{height:'18px', width:'18px'}} src='mailicon.webp' alt='google icon' />
                <p className='tech'>Sign up with email</p>
            </div>


        </div>

        <p style={{fontFamily:'sans-serif', fontSize:'1rem', fontWeight:'bold'}} className='signLink'>Already have an account? <Link to='/login'><span style={{color:'#1B8919', fontWeight:'bold'}}>Sign in</span></Link> </p>
      
        <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>

        <p className='signit' style={{fontFamily:'sans-serif'}}>Click "sign up" to agree to medium's <span style={{textDecoration:'underline',color:'gray'}}>Terms of services</span>  and acknowledge</p>
        
        </div>
    </div>
  )
}

export default Signup
