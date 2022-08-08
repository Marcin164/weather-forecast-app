import { call, put, takeEvery} from 'redux-saga/effects'
import { WEATHER } from '../../Constants/actionConstants'
import {fetchWeather} from '../../Services/weatherService'
import { fetchedWeatherError, fetchedWeatherSuccess } from '../actions/weather'

async function fetchedWeather() {
    const res = await fetchWeather()
    return res
} 

function* fetchWeatherSuccess(action:any):Generator<any> {
    try {
        const weather:any = yield call(fetchedWeather)
        if(weather.code === "ERR_NETWORK") throw weather
        yield put(fetchedWeatherSuccess(weather))
    } catch (error:any) {
        yield put(fetchedWeatherError(error.message))
    }
}

function* fetchWeatherSaga(){
    yield takeEvery(WEATHER.WEATHER_FETCH, fetchWeatherSuccess)
}

export default fetchWeatherSaga