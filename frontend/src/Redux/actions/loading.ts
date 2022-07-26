import { TOGGLE_LOADING } from "../../Constants/actionConstants"

export const toggleLoading = (loading?:any) => ({
    type: TOGGLE_LOADING,
    loading
})