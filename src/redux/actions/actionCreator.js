import { GET_NEWS, SET_LATEST_NEWS, SET_POPULAR_NEWS } from "../constants";


export const getLatestNews = () => ({
    type: GET_NEWS,
})

export const setLatestNews = (payload) => ({
    type: SET_LATEST_NEWS,
    payload: payload,
})

export const setPopularNews = (payload) => ({
    type: SET_POPULAR_NEWS,
    payload: payload,
})


