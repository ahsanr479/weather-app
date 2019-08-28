const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(!address){
    console.log('please provide an address');
}
else{
    geocode(address,(error,data) =>{
        if(error){
            return console.log(error);
        }else if(data){
            forecast(data.latitude,data.longitude,(error,weatherData) => {
                if(error){
                    return console.log(error);
                }
                console.log(data.location);
                console.log(weatherData);
            })
        }
    })
}


