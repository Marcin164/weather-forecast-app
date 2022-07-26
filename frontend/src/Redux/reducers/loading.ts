import { TOGGLE_LOADING } from "../../Constants/actionConstants";

function toggleLoading(state:any = true, action:any){
    switch(action.type){
        case TOGGLE_LOADING:
            return action.loading
        default:
            return state
    }
}

export default toggleLoading