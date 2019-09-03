const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');
const express = require('express');
const hbs = require('hbs')
const path = require('path')


const app = express();

// Define paths for Express config
const pubDirPath = path.join(__dirname,'../public')
const viewPaths = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views',viewPaths)
hbs.registerPartials(partialsPath)


app.set('view engine','hbs')

app.use(express.static(pubDirPath))

app.get('',(req,res) => {
    res.render('index')
})

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
            res.send({
                location:location,
                forecast:weatherData.forecast
            })
        })
    })
})

app.listen(3000,() => {
    console.log('server is up on port 3000')
})




