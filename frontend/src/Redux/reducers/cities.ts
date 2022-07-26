import { CITIES } from "../../Constants/actionConstants";

function fetchCities(state:any = [], action:any){
    switch(action.type){
        case CITIES.CITIES_FETCH_SUCCESS:
            return action.cities
        case CITIES.CITIES_FETCH_ERROR:
            return {error:action.error};
        default:
            return state
    }
}

export default fetchCities