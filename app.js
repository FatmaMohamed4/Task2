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


const geocodeUrl ='https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw'
//run
request ({url : geocodeUrl , json : true} , (error , response) => {
     
        if (error){
            callback ("unable to connect geocode service" , undefined)
       
        } else {
            console.log(response.body)    
             
        }
      })
