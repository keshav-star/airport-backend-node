import React, { useEffect, useState } from 'react'
import './user.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

const User = () => {
    const [booked, setbooked] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3000/')
      .then((response)=>{
        setbooked(response.data)
      })
      .catch(error=>console.log(error))
    }, [])
    
    return (
        <div className='user-page'>
            <Link to="/bookticket" ><button>Book ticket</button></Link>
            <div className="bookings-container">
                {booked.map((Ticket) => {
                    // console.log(Ticket)
                    const { id, Src, dest, flightName, travelclass,date,psgage,psgname,pnr} = Ticket;
                    return <div key={id} className="ticket-card">
                        <span>{psgname}</span>
                        <span>{flightName}</span>
                        <span>{psgage}</span>
                        <span>{travelclass}</span>
                        <span>{pnr}</span>
                        <span>{Src}</span>
                        <span>{dest}</span>
                        <span>{date}</span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default User