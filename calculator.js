const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    // res.send("Hello, BMI");
    res.sendFile(__dirname + "/index.html");
})



app.get("/bmi", (req, res) => {
    res.sendFile(__dirname + "/bmi.html");
})

app.post("/bmi", (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let result = weight / (height * height);
    result = result.toPrecision(2);
    
    let range;
    
    if(result < 18.5)
        range = "Underweight";
    else if(result >= 18.5 && result <= 24.9)
        range = "Healthy Weight";
    else if(result >= 25 && result <= 29.9)
        range = "Overweight";
    else 
        range = "Obese";

    res.send(`
        <h2>BMI = ${result}</h2>
        <h3>You are in the ${range} range.</h3>
    `);
})


app.listen(3000, () => {
    console.log("Server running at port 3000");
})