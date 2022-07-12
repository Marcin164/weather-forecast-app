import { call, put, takeEvery} from 'redux-saga/effects'
import { CITIES } from '../../Constants/actionConstants'
import {fetchCities} from '../../Services/citiesService'

function* isFetchCitiesSuccess(action:any):Generator<any> {
    try {
        const cities:any = yield call(fetchCities)
        yield put({type: CITIES.FETCH_CITIES_SUCCESS, cities})
    } catch (error:any) {
        yield put({type: CITIES.FETCH_CITIES_ERROR, message: error.message})
    }
}

function* fetchCitiesStart(){
    yield takeEvery(CITIES.FETCH_CITIES, isFetchCitiesSuccess)
}

export default fetchCitiesStart