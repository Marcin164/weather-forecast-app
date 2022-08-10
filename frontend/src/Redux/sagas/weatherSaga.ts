import { call, put, takeEvery} from 'redux-saga/effects'
import { WEATHER } from '../../Constants/actionConstants'
import {fetchWeather} from '../../Services/weatherService'
import { fetchedWeatherError, fetchedWeatherSuccess } from '../actions/weather'

async function fetchedWeather() {
    const res = await fetchWeather()
    return res
} 

function* fetchWeatherSuccess():Generator<any> {
    try {
        const weather:any = yield call(fetchedWeather)
        if(weather.code === "ERR_NETWORK") throw weather
        yield put(fetchedWeatherSuccess(weather.data))
    } catch (error:any) {
        yield put(fetchedWeatherError(error))
    }
}

function* fetchWeatherSaga(){
    yield takeEvery(WEATHER.WEATHER_FETCH, fetchWeatherSuccess)
}

export default fetchWeatherSaga