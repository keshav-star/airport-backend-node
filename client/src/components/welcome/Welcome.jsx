import React from 'react'
import { Link } from 'react-router-dom'
import './welcome.scss'
const Welcome = () => {
  return (
    <div className='welcome'>
        <div className="user">
            <Link to="/userlogin">user Login</Link>
        </div>
        <div className="admin">
            <Link to='/adminlogin' >Admin Login</Link>
        </div>
        
    </div>
  )
}

export default Welcome