import { call, put, takeEvery } from 'redux-saga/effects'
import { CITIES } from '../../Constants/actionConstants'
import {fetchCities} from '../../Services/citiesService'
import { fetchedCitiesError, fetchedCitiesSuccess } from '../actions/cities'

async function fetchedCities() {
    const res = await fetchCities()
    return res
} 

function* fetchCitiesSuccess(action:any):Generator<any> {
    try {
        const cities:any = yield call(fetchedCities)
        if(cities.code === "ERR_NETWORK") throw cities
        yield put(fetchedCitiesSuccess(cities))
    } catch (error:any) {
        yield put(fetchedCitiesError(error.message))
    }
}

function* fetchCitiesSaga(){
    yield takeEvery(CITIES.CITIES_FETCH, fetchCitiesSuccess)
}

export default fetchCitiesSaga