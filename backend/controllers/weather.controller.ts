import { AnyError } from "mongodb"

const Weather = require('../models/weather.model.ts')

module.exports.weather_get = async (req:any , res:any) => {
    try{
        const weather = await Weather.getWeatherData()
        res.status(200).send(weather)
    }catch(err:any){
        res.status(400).send(err)
    }
}

module.exports.cities_get = async (req:any, res:any) => {
    try{
        const cities = await Weather.getCities()
        res.status(200).send(cities)
    }catch(err:any){
        res.status(400).send(err)
    }
}