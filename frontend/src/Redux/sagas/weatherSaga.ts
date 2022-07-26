import { call, put, takeEvery} from 'redux-saga/effects'
import { WEATHER } from '../../Constants/actionConstants'
import {fetchWeather} from '../../Services/weatherService'

async function fetchedWeather() {
    const res = await fetchWeather()
    return res
} 

function* fetchWeatherSuccess(action:any):Generator<any> {
    try {
        const weather:any = yield call(fetchedWeather)
        yield put({type: WEATHER.WEATHER_FETCH_SUCCESS, weather: weather.data})
    } catch (error:any) {
        yield put({type: WEATHER.WEATHER_FETCH_ERROR, error})
    }
}

function* fetchWeatherSaga(){
    yield takeEvery(WEATHER.WEATHER_FETCH, fetchWeatherSuccess)
}

export default fetchWeatherSaga