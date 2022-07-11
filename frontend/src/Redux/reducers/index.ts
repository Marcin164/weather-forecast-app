import { combineReducers } from "redux";
import fetchCities from "./cities";
import fetchWeather from "./weather";

const reducer = combineReducers({
    weather: fetchWeather,
    cities: fetchCities
})

export default reducer