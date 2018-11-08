const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const expressSession = require('express-session')
const app = express();
const port = process.env.PORT || 9000;
require("./db/db");


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://barley-legal.netlify.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const authController = require("./controllers/authController");
app.use(expressSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use("/api/v1/auth", authController);




app.get("/api/v1", (req, res) => {
    res.json({
        "message": "welcome to the homepage this is where the stuff happens",
        "status": '200',
    })
})


app.listen(port, ()=>{
    console.log("running on the port:", port)
})