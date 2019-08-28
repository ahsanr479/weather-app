const request = require('request');

const forecast = (latitde,longitude,callback) => {
    const url = `https://api.darksky.net/forecast/b9d026017653268baccb5a19b6169e58/${encodeURIComponent(longitude)},${encodeURIComponent(latitde)}?limit=1`;
    request({url:url,json:true},(error,response) => {
        if(error){
            callback('unable to connect to weather api',undefined);
        }else if(response.body.error) {
            callback('Unable to find location',undefined);
        }else{
            callback(undefined,{
                forecast:`${response.body.daily.data[0].summary} It is  currently ${response.body.currently.temperature} degrees out.There is a ${response.body.currently.precipProbability}% chance of rain`
            })
        }
    })
}

module.exports = forecast