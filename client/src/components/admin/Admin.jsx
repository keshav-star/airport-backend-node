import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './admin.scss'
const Admin = () => {
  const [booked, setbooked] = useState([])

 
  useEffect(() => {
    axios.get('http://localhost:3000/admin')
      .then((response) => {
        setbooked(response.data)
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <div className='admin-container'>
      <nav>
        <ul>
          <Link to="/admin" ><li>Dashboard</li></Link>
          <Link to="/addDetails"><li>Add Details</li></Link>
        </ul>
      </nav>
      <div className="dashboard">
        <div className='user-page'>
          <div className="bookings-container">
            {booked.map((Ticket) => {
              // console.log(Ticket)
              const { id, Src, dest, flightName, travelclass, date, psgage, psgname, pnr } = Ticket;
              return <div key={id} className="ticket-card">
                <p>{psgname}</p>
                <p>{flightName}</p>
                <p>{psgage}</p>
                <p>{travelclass}</p>
                <p>{pnr}</p>
                <p>{Src}</p>
                <p>{dest}</p>
                <p>{date}</p>
              </div>
            })}
          </div>
        </div>
        


      </div>
      
    </div>
  )
}

export default Admin