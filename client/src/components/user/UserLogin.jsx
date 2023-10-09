import React,{useRef} from 'react'

const UserLogin = () => {
    const username = useRef()
    const password = useRef()
    const handleCreateAccount = ()=>{

    }
    const handleLogin = (e)=>{
        location.href= "http://localhost:5173/user"
    }
  return (
    <div>
        <input type="text" placeholder='Enter Username' name='username' ref={username} />
        <input type="password" placeholder='Enter Password' name='password' ref={password} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  )
}

export default UserLogin