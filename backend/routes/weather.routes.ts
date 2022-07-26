const { Router } = require('express')
const WeatherController = require('../controllers/weather.controller.ts')

const router = Router()

router.get('/getWeather', WeatherController.weather_get)
router.get('/getCities', WeatherController.cities_get)

module.exports = router