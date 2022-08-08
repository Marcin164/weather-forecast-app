import { WEATHER, initialState } from "../../Constants/actionConstants";

function fetchWeather(state:any = initialState, action:any){
    switch(action.type){
        case WEATHER.WEATHER_FETCH:
            return {
                ...state,
                isLoading:true
            }
        case WEATHER.WEATHER_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.weather
            }
        case WEATHER.WEATHER_FETCH_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading:false
            }
        default:
            return state
    }
}

export default fetchWeather