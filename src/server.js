require("./db/connection");
const express = require("express"); 
const app = express(); 
const cors = require ("cors");
const port = process.env.PORT || 5001; 
const userRouter = require("./user/routes");

// app can now use json method - can convert from and to json data 
app.use(express.json());
// install cors and use ABOVE router
app.use(cors());
app.use(userRouter);
// future proofing: 
// atm always on port 5001 - but in future if you're hosting, the app will assign you a port 
app.listen(port, ()=> { 
    console.log(`listening on port ${port}`)
})


