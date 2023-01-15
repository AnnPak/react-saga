import { GET_NEWS, SET_NEWS } from "../constants";


export const getNews = () => ({
    type: GET_NEWS,
})

export const setNews = (payload) => ({
    type: SET_NEWS,
    payload: payload,
})


