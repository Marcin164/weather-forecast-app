import { CITIES, initialState } from "../../Constants/actionConstants";

function fetchCities(state:any = initialState, action:any){
    switch(action.type){
        case CITIES.CITIES_FETCH:
            return {
                ...state,
                isLoading:true
            }
        case CITIES.CITIES_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.cities
            }
        case CITIES.CITIES_FETCH_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading:false
            }
        default:
            return state
    }
}

export default fetchCities