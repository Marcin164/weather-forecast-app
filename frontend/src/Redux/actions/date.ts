import { SET_DATE } from "../../Constants/actionConstants"

export const setDate = (date?:any) => ({
    type: SET_DATE,
    date
})