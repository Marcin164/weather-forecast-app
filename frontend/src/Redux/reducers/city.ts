import { SET_CITY } from "../../Constants/actionConstants";

function setCity(state:any = null, action:any){
    switch(action.type){
        case SET_CITY:
            return action.city
        default:
            return state
    }
}

export default setCity