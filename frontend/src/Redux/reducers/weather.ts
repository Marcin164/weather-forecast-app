import { WEATHER } from "../../Constants/actionConstants";

function fetchWeather(state:any = [], action:any){
    switch(action.type){
        case WEATHER.WEATHER_FETCH:
            return state
        case WEATHER.WEATHER_FETCH_SUCCESS:
            return action.weather
        case WEATHER.WEATHER_FETCH_ERROR:
            return action.error
        default:
            return state
    }
}

export default fetchWeather