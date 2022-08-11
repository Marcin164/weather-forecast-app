import axios from "axios"

export const fetchWeather = async () => {
    try {
        const weather = await axios.get(`${process.env.API_URL}/getWeather`)
        if(!weather) throw Error("Cannot fetch weather")
        return weather
    } catch (error) {
        return error
    }
}