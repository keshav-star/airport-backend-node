const pool = require("../database/mysql");

const routerController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query(`select * from users`)
            res.json(rows)
        } catch (error) {
            console.log(error)
        }
    },
    getAdmin: async (req,res)=>{
        try {
            const [rows, fields] = await pool.query(`select userss.Username Ad User, flights.FlightNumber As Flight, bookings.BookingDate, bookings.pnr from userss JOIN bookings on userss.userID = bookings.userID JOIN flights on bookings.FlightID = flights.FlightID`)
            res.json(rows)
            console.log(rows)
        } catch (error) {
            console.log(error)
        }
    },
    getUser: async (req,res)=>{
        try {
            const [rows, fields] = await pool.query(`select flights.FlightNumber As Flight, bookings.BookingDate, bookings.pnr from bookings join flights on bookings.FlightID = flights.FlightID WHERE bookings.userID = 1`)
            res.json(rows)
            console.log(rows)
        } catch (error) {
            console.log(error)
        }
    },
    getFlights: async (req,res)=>{
        try {
            const [rows,fields] = await pool.query('select * from flights');
            res.json(rows)
        } catch (error) {
            console.log(error)
        }
    },
    
    getBooking: async (req, res) => {
        try {
            const { source, destination, flightName, travelclass,date,passengerName,passengerAge,pnr } = req.body

            

            const [rows,fields]  = await pool.query(`insert into users (Src ,dest ,flightname ,travelclass , date, psgname ,psgage ,pnr) values ('${source}','${destination}','${flightName}','${travelclass}','${date}','${passengerName}','${passengerAge}','${pnr}' )`)
            res.json(req.body)
        }
        catch (error) {
            console.log(error)
        }
    }
}
module.exports = routerController;