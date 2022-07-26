import { SET_CITY } from "../../Constants/actionConstants"

export const setCity = (city?:any) => ({
    type: SET_CITY,
    city
})