import { TOGGLE_ERROR } from "../../Constants/actionConstants"

export const toggleError = (error?:any) => ({
    type: TOGGLE_ERROR,
    error
})