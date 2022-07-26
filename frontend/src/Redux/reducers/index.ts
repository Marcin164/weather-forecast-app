import { combineReducers } from "redux";
import fetchCities from "./cities";
import toggleError from "./errors";
import toggleLoading from "./loading";
import fetchWeather from "./weather";
import setCity from "./city";
import setDate from "./date";

const reducer = combineReducers({
    weather: fetchWeather,
    cities: fetchCities,
    error: toggleError,
    loading: toggleLoading,
    city: setCity,
    date: setDate
})

export default reducer