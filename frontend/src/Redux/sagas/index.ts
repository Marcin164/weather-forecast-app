import { all, spawn } from 'redux-saga/effects'
import fetchCitiesSaga from './citiesSaga'
import fetchWeatherSaga from './weatherSaga'

export default function* rootSaga():any{
    const sagas = [fetchCitiesSaga, fetchWeatherSaga]
    yield all(sagas.map((saga) => spawn(saga)))
}