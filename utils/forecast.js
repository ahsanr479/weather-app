const request = require('request');

const forecast = (latitde,longitude,callback) => {
    const url = `https://api.darksky.net/forecast/b9d026017653268baccb5a19b6169e58/${encodeURIComponent(longitude)},${encodeURIComponent(latitde)}?limit=1`;
    request({url:url,json:true},(error,{body}) => {
        if(error){
            callback('unable to connect to weather api',undefined);
        }else if(body.error) {
            callback('Unable to find location',undefined);
        }else{
            callback(undefined,{
                forecast:`${body.daily.data[0].summary} It is  currently ${body.currently.temperature} degrees out.There is a ${body.daily.data[0].precipProbability}% chance of rain`
            })
        }
    })
}

module.exports = forecast