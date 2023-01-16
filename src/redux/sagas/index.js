import { put, call, takeLatest, fork } from "@redux-saga/core/effects";
import { getLatestNews, getPopularNews } from "../../api";
import { SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR, GET_NEWS } from "../constants";
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

export function* handleNews() {
  //spawn создает паралл задачу,
  //в отличии от fork ее использваоние
  //не привязано к родителю => если один запрос упал, второй отработает
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
}

export function* watchClickSaga() {
  // watcher следит за экшенами
  yield takeLatest(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
