const express = require("express");

const app = express();

const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 3000;

const routerRoutes = require('./routes/routerRoutes')

app.use(cors());

app.use(express.json());

app.use('/', routerRoutes)

app.listen(port, () => {
  // Perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});