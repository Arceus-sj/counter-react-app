const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));



app.get("/", (req, res) => {
    // res.sendFile("index.html");
    // res.send("Hello, World");
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    // res.send("<h2>Posting Successful!</h2>");

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let ans = num1 + num2;

    res.send(`<h3>The result of the calculation is ${ans}</h3>`)
})





app.listen(3000, () => {
    console.log("Server is running on port 3000.");
})
