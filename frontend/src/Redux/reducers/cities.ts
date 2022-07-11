import { CITIES } from "../../Constants/actionConstants";

function fetchCities(state:any = [], action:any){
    switch(action.type){
        case CITIES.FETCH_CITIES:
            return {
                data: state.push(action.value),
                success: false
            }
        case CITIES.FETCH_CITIES_SUCCESS:
            return {success:true}
        case CITIES.FETCH_CITIES_ERROR:
            return {error:true}
        default:
            return state
    }
}

export default fetchCities