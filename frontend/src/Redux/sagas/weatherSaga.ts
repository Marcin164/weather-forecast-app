import { call, put, takeEvery} from 'redux-saga/effects'
import { WEATHER } from '../../Constants/actionConstants'
import {fetchWeather} from '../../Services/weatherService'

function* isFetchWeatherSuccess(action:any):Generator<any> {
    try {
        const weather:any = yield call(fetchWeather)
        yield put({type: WEATHER.FETCH_WEATHER_SUCCESS, weather})
    } catch (error:any) {
        yield put({type: WEATHER.FETCH_WEATHER_ERROR, message: error.message})
    }
}

function* fetchWeatherStart(){
    yield takeEvery(WEATHER.FETCH_WEATHER, isFetchWeatherSuccess)
}

export default fetchWeatherStart