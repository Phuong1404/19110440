const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

const Router=require('./Routes/student.route')
app.use("/",Router)

app.listen(5000, () => {
    console.log("run port 5000")
})
