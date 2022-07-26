import { TOGGLE_ERROR } from "../../Constants/actionConstants";

function toggleError(state:any = false, action:any){
    switch(action.type){
        case TOGGLE_ERROR:
            return action.error
        default:
            return state
    }
}

export default toggleError