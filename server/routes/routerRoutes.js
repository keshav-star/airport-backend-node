const express = require("express")
const router = express.Router()

const routerController = require("../controller/router.controller")

router.get("/", routerController.getAll)
router.get("/admin", routerController.getAdmin)
router.get("/User", routerController.getUser)
router.get("/flights", routerController.getFlights)
router.post("/bookticke", routerController.getBooking)

module.exports = router