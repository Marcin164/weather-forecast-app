import { all, call, put, fork } from 'redux-saga/effects'
import fetchCitiesStart from './citiesSaga'
import fetchWeatherStart from './weatherSaga'

export default function* rootSaga():Generator<any>{
    yield fork(fetchCitiesStart)
    yield fork(fetchWeatherStart)
}