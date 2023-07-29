//importing express and dotenv

const express = require("express");
const dotenv = require("dotenv");
const { router } = require("./routes/users")
const cors = require("cors")

// assigning express to a variable
const app = express();

//setting express to the ejs engine
app.set("view engine", "ejs");
app.use(cors())

//creating a getrequest
app.get("/", (req, res)=>{
    const person = {
        firstName: "Michael",
        lastName: "Olamide"
    };
 
    res.render("index", {person})
});

//using the mini app created in products.js while importing the router

app.use("/api/v1/", router)

//configuring dotenv
dotenv.config()

//assigning a variable to the port whilst integrating .env
const port = process.env.PORT || 3000;
 -
//Creating the server
app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`)
})




