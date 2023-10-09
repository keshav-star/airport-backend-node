import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const BookingCard = () => {
const [flights,setflights] = useState([]);
    const source = useRef()
    const destination = useRef()
    const flightName = useRef()
    const travelclass = useRef()
    const passengerName = useRef()
    const passengerAge = useRef()
    const date = useRef()
    const handleBooking = async (e) => {
        const data =
        {
            source: source.current.value,
            destination: destination.current.value,
            flightName: flightName.current.value,
            travelclass: travelclass.current.value,
            date: date.current.value,
            passengerName: passengerName.current.value,
            passengerAge: passengerAge.current.value,
            pnr:Math.floor(Math.random()*10000)
        }
        const url = 'http://localhost:3000/bookticke';
        axios.post(url,data)
        .then((response)=>{console.log(response)})
        .catch(e=>console.log(e))
        // location.href= "http://localhost:5173/user"
    }

    useEffect(() => {
        axios.get('http://localhost:3000/flights')
        .then(response=>{
            setflights(response.data)
        })
        .catch(error=>console.log(error))
    }, [])
    
    return (
        <div className="booking-container">
            <div>
                <span className="source" >
                <select ref={source} >
                    {flights.map((flight)=>{
                        return <option key={flight.FlightID} value={flight.Src}>{flight.Src}</option>
                    })}
                </select>
                </span>
                <span> To </span>
                <select ref={destination} >
                    {flights.map((flight)=>{
                        return <option key={flight.FlightID} value={flight.dest}>{flight.dest}</option>
                    })}
                </select>
            </div>
            <div className="flight-name">
                <input type="text" ref={flightName} placeholder='Enter Flight Service Name' />
            </div>
            <div className="date">
                <label htmlFor="date">Departure Date </label>
                <input type="date" ref={date} name="date" id="date" />
            </div>
            <div className="traveller-class" >
                <select ref={travelclass}>
                    <option value="choose" disabled>Choose Class</option>
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                </select>
            </div>
            <div className="passanger-details">
                <label htmlFor="name" >Name </label>
                <input type="text" name='name' ref={passengerName} placeholder='Enter Name' />
                <span></span>
                <label htmlFor="age" >Age </label>
                <input type="number" name="age" ref={passengerAge} id="age" min="0" />
            </div>

            <Link onClick={handleBooking}> Book Ticket</Link>
        </div>
    )
}

export default BookingCard