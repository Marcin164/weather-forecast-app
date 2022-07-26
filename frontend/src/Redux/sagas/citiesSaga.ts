import { call, put, takeEvery } from 'redux-saga/effects'
import { CITIES } from '../../Constants/actionConstants'
import {fetchCities} from '../../Services/citiesService'

async function fetchedCities() {
    const res = await fetchCities()
    return res
} 

function* fetchCitiesSuccess(action:any):Generator<any> {
    try {
        const cities:any = yield call(fetchedCities)
        yield put({type: CITIES.CITIES_FETCH_SUCCESS, cities: cities.data})
    } catch (error:any) {
        yield put({type: CITIES.CITIES_FETCH_ERROR, error})
    }
}

function* fetchCitiesSaga(){
    yield takeEvery(CITIES.CITIES_FETCH, fetchCitiesSuccess)
}

export default fetchCitiesSaga