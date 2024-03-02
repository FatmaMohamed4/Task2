const request = require("request")
// const geocode= require("./data/geoCode.js")
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

 
const geocodeUrl1 ='https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw'
//run
request ({url : geocodeUrl1 , json : true} , (error , response) => {
     
        if (error){
            callback ("unable to connect geocode service" , undefined)
       
        } else {
            console.log(response.body)    
             
        }
      })
    



const geocode = ( address , callback) => {
const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +  ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
request ({url : geocodeUrl , json : true} , (error , response) => {
     
            if (error){
                callback ("unable to connect geocode service" , undefined)
            }else if (response.body.message)  {
                callback (response.body.message , undefined )
            } else if (response.body.features.length == 0) {
                 callback("Unable to find location" , undefined)
            } else {
                callback(undefined , {
                     longtitude : response.body.features[0].center[0],
                     latitude : response.body.features[0].center[1]
                } )
               
            }
 })       
}

const country = process.argv[2]
geocode( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : "  , data)

    forecast( data.latitude , data.longtitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
     } )
 })