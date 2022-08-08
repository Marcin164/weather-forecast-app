import { combineReducers } from "redux";
import fetchCities from "./cities";
import fetchWeather from "./weather";
import setCity from "./city";
import setDate from "./date";

const reducer = combineReducers({
    weather: fetchWeather,
    cities: fetchCities,
    city: setCity,
    date: setDate
})

export default reducer