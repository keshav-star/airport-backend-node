import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  return (
    <div className='user-navbar'>
        <div className="services">
            <ul>
                <Link to="/userDashboard"><li>DashBoard</li></Link>
                <Link to="/Bookflight"><li>Book Flight</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default UserNavbar