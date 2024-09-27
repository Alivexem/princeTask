import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const App = () => {
  return (
    <div style={{background: '#F8F3ED',height:'100vh'}}>
      <div className='medHead'>
        <h1>GURU</h1>
        <Link to='/login'>
        <button className='btn'>Get started</button>
        </Link>
      </div>

      <h1 className='bigText'>Human stories & ideas</h1>
      <h1 className='reader' style={{fontFamily:'sans-serif'}}>A place to read, write, and deepen your understanding Guru hub.</h1>
      
      <Link to='/login'>
      <button className='greenBtn'> Start reading</button>
        </Link>
    </div>
  )
}

export default App
