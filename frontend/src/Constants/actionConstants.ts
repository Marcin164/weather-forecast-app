export const WEATHER:any = {
    WEATHER_FETCH: "WEATHER_FETCH",
    WEATHER_FETCH_SUCCESS: "WEATHER_FETCH_SUCCESS",
    WEATHER_FETCH_ERROR: "WEATHER_FETCH_ERROR"
}

export const CITIES:any = {
    CITIES_FETCH: "CITIES_FETCH",
    CITIES_FETCH_SUCCESS: "CITIES_FETCH_SUCCESS",
    CITIES_FETCH_ERROR: "CITIES_FETCH_ERROR"
}

export const SET_CITY = "SET_CITY"
export const SET_DATE = "SET_DATE"

export const initialState = {
    isLoading: false,
    error: null,
    data: []
}