const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const express = require('express');


const app = express();

app.get('/weather',(req,res) => {
    if(!req.query.address){
        res.send('Please enter address')
    }
    geocode(req.query.address,(error,{latitude,longitude,location}) => {
        if(error){
            res.send(error)
        }
        forecast(latitude,longitude,(error,weatherData) => {
            if(error){
                res.send(error)
            }
            res.send(weatherData.forecast)
        })
    })
})

app.listen(3000,() => {
    console.log('server is up on port 3000')
})




