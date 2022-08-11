import axios from "axios"

export const fetchWeather = async () => {
    try {
        const weather = await axios.get(`http://localhost:3001/getWeather`)
        if(!weather) throw Error("Cannot fetch weather")
        return weather
    } catch (error) {
        return error
    }
}