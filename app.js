const request = require("request")
const geocode= require("./data/geoCode.js")
const forecast = require('./data/forecast.js')

const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=egypt"
// name of city & weather 
request ({url , json : true  } , (error , response) => {

    console.log(response.body.location.name)
    console.log(response.body.current.condition.text)

})



// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=31.0,0"
// from خطوط الطول و العرض
request ({url, json : true  } , (error , response) => {

    if (error) {
        console.log("ERROR HAS OCCURED")
    } else if (response.body.error){
        console.log(response.body.error.message)
    }else {
        console.log(response.body.location.name ,response.body.current.condition.text)
    }
})

 
const country = process.argv[2]


geocode( country , (error , data) => {
   
