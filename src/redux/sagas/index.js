import {put, call, takeLatest} from '@redux-saga/core/effects'
import { getNews } from '../../api';
import { GET_NEWS } from "../constants";
import { setNews } from '../actions/actionCreator';


export function* handleNews() { // warker описывает логику запросов, работа с апи и асинхронщиной
   const {hits} = yield call(getNews);//call приостанавливает saga до тех пор, пока promise не вернет resolve
   return yield put(setNews(hits)); //put = dispatch
}

export function* watchClickSaga() { // watcher следит за экшенами
    yield takeLatest(GET_NEWS, handleNews);
}

export default function* rootSaga() {
    yield watchClickSaga();
}