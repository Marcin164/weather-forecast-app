import { WEATHER } from "../../Constants/actionConstants";

function fetchWeather(state:any = [], action:any){
    switch(action.type){
        case WEATHER.FETCH_WEATHER:
            return {
                data: state.push(action.value),
                success: false
            }
        case WEATHER.FETCH_WEATHER_SUCCESS:
            return {success:true}
        case WEATHER.FETCH_WEATHER_ERROR:
            return {error:true}
        default:
            return state
    }
}

export default fetchWeather