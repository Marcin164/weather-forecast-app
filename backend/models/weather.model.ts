import mongoose from "mongoose";
import { Schema, model } from "mongoose"; 

const WeatherSchema:Schema = new Schema({
  date: Number,
  city: String,
  data: [
    {
      hour: Number,
      humidity: Number,
      temperature: Number,
      windStrength: Number,
      windDirection: String,
      pressure: Number,
      weather: String,
      rainFall: Number,
    },
  ],
  airQuality: [
    {
      tag: String,
      value: Number,
    },
  ],
  sunRise: String,
  moonRise: String,
});

WeatherSchema.statics.getWeatherData = async function (){
  const weather = await this.find()
  if(weather) return weather;
  throw Error("Could not find any data")
}

WeatherSchema.statics.getCities = async function (){
  const weather = await this.find({date: 1658786400000})
  if(weather) return weather;
  throw Error("Could not find any data")
  // if(!weather) throw Error("Could not find any data")
  // let cities:Array<any> = []
  // for(let i = 0 ; i < weather.length ; i++){
  //   let city = {
  //     city: weather[i].city,
  //     temperature: weather[i].data[12].temperature,
  //     humidity: weather[i].data[12].humidity,
  //     windStrength: weather[i].data[12].windStrength,
  //     weather: weather[i].data[12].weather
  //   }
  //   cities.push(city)
  // }
  // return cities
}

const WeatherModel = model(
  "weather",
  WeatherSchema
)

module.exports = WeatherModel