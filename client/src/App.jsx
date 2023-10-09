import React, { useEffect, useState } from 'react';
import User from './components/user/User';
import Admin from './components/admin/Admin'
import {Routes,Route} from 'react-router-dom'
import BookingCard from './components/user/BookingCard';
import './App.scss'
import Welcome from './components/welcome/Welcome';
import UserLogin from './components/user/UserLogin';
import AdminLogin from './components/admin/AdminLogin';
import AddDetails from './components/admin/AddDetails';
function App() {
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   // Make a GET request to your Node.js API endpoint
  //   fetch('http://localhost:3000/') 
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setMessage(data.message);
  //     })
  //     .catch((error) => {
  //       console.error('There was a problem with the fetch operation:', error);
  //     });
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/userlogin" element={<UserLogin/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/bookticket" element={<BookingCard/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path='/addDetails' element={<AddDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
