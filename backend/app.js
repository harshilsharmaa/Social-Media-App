const express = require("express")
const app = express();

if(process.env.NODE_ENV !=="production"){
    require("dotenv").config({path: "./config/config.env"});
}


const cookieParser = require("cookie-parser");


const cors = require('cors');

app.use(cors());

// Using Middleware
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());



// import routes
const post = require("./routes/post");
const user = require("./routes/user");

// using routes
app.use("/api/v1", post);
app.use("/api/v1", user);


module.exports = app;
