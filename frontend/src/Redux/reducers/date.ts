import { SET_DATE } from "../../Constants/actionConstants";

function setDate(state:any = null, action:any){
    switch(action.type){
        case SET_DATE:
            return action.date
        default:
            return state
    }
}

export default setDate