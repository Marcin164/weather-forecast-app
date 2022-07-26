import {CITIES} from '../../Constants/actionConstants'

export const fetchedCitiesSuccess = (cities?:any) => ({
    type: CITIES.CITIES_FETCH_SUCCESS, 
    cities
})

export const fetchedCities = (cities?:any) => ({
    type: CITIES.CITIES_FETCH,
    cities
})

export const fetchedCitiesError = (error?:any) => ({
    type: CITIES.CITIES_FETCH_ERROR,
    error
})