import React, { useRef } from 'react'

const AdminLogin = () => {
    const username = useRef()
    const password = useRef()
    const handleLogin = (e)=>{
        location.href= "http://localhost:5173/admin"
    }
  return (
    <div className='admin-login'>
        <input type="text" placeholder='Enter Username' name='username' ref={username} />
        <input type="password" placeholder='Enter Password' name='password' ref={password} />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default AdminLogin