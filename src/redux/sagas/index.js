import { put, call, takeEvery, fork, all } from "@redux-saga/core/effects";
import { getLatestNews, getPopularNews } from "../../api";
import { SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR, GET_LATEST_NEWS, GET_POPULAR_NEWS, } from "../constants";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNews);
    yield put(setLatestNews(hits)); 
  } catch {
    yield put({type: SET_LATEST_NEWS_ERROR, payload: "Error fetching latest news!!"});
  }
}

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews); 
    yield put(setPopularNews(hits));
  } catch {
    yield put({type: SET_POPULAR_NEWS_ERROR, payload: "Error fetching popular news!!"});
  }
  
}

export function* watchPopularSaga(){
  yield takeEvery(GET_POPULAR_NEWS, handlePopularNews)
}

export function* watchLatestSaga(){
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews)
}

export default function* rootSaga() {
  yield all([//all - ожидается звершение всех процессов
    fork(watchLatestSaga),//fork - параллельное выполнение вызовов
    fork(watchPopularSaga),
  ])
}
