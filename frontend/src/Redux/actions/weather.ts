import {WEATHER} from '../../Constants/actionConstants'

export const fetchedWeatherSuccess = (weather?:any) => ({
    type: WEATHER.WEATHER_FETCH_SUCCESS, 
    weather
})

export const fetchedWeather = (weather?:any) => ({
    type: WEATHER.WEATHER_FETCH,
    weather
})

export const fetchedWeatherError = (error?:any) => ({
    type: WEATHER.WEATHER_FETCH_ERROR,
    error
})