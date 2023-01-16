import { SET_LATEST_NEWS, SET_POPULAR_NEWS } from "../constants";

const initialState = {
  latestNews: [],
  popularNews: [],
};

const news = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LATEST_NEWS:
      return {
        ...state,
        latestNews:
          payload !== undefined
            ? [...state.latestNews, ...payload]
            : [...state.latestNews],
      };
    case SET_POPULAR_NEWS:
      return {
        ...state,
        popularNews:
          payload !== undefined
            ? [...state.popularNews, ...payload]
            : [...state.popularNews],
      };
    default:
      return state;
  }
};

export default news;

