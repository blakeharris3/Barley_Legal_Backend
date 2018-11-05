const express = require("express");
const methodOverride = require("method-Override");
const bodyParser = require("body-Parser");
const cors = require("cors");
const app = express();
const port = 3000;
require("./db/db");

const corsOptions = {
    origin:"http://localhost:3000",
    creditials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));


app.get("/api/v1", (req, res)=>{
    res.json({
        "message": "welcome to the homepage this is where the stuff happens",
        "status": 200
    })
})



app.listen(port, ()=>{
    console.log("running on the port:", port)
})