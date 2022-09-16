const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})


app.post("/", (req, res) => {
    // console.log("Posting request accepted.");
    // console.log(req.body.cityName);

    
    // NOTE: we only can send one response in a particular get method
    // res.send("Server is running.");

    const city = req.body.cityName;
    const apiKey = "abb677b5ca91334ddda2fb8b059cfae4";
    const units = "metric";


    // making https request to server:
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    https.get(url, (response) => {
        console.log(`http status code: ${response.statusCode}`);

        // NOTE: if we simpely just retrive the data then it will be in form of hex-decimal,
        // so to convert this into object structure we need to use JSON.parse()
        response.on("data", (data) => {

            const weatherData = JSON.parse(data);
            // console.log(weatherData);

            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const iconID = weatherData.weather[0].icon;

            console.log(`Temperature: ${temperature}.`);
            console.log(`Weather looks like ${description}.`);
            console.log(`icon id: ${iconID}`);

            // res.send(`
            // <h1>Temperature: ${temperature} degree celcius.</h1>
            // <h2>Weather looks like ${description}</h2>
            // `);

            // NOTE: another method to send response:
            res.write(`<p>Weather Report:</p>`);
            res.write(`<h1>Temperature: ${temperature} degree celcius.</h1>`);
            res.write(`<h2>Weather in ${city} looks likes ${description}.</h2>`);
            res.write(`<img src="http://openweathermap.org/img/wn/${iconID}@2x.png" alt="">`);
            res.send();
        })

    })



})






app.listen(3000, () => {
    console.log("Server is running on port 3000.");
})