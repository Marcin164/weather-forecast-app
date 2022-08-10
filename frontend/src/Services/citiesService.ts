import axios from "axios"

export const fetchCities = async () => {
    try {
        const cities = await axios.get(`getCities`)
        if(!cities) throw Error("Cannot fetch cities")
        return cities
    } catch (error) {
        return error
    }
}