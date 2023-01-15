import { SET_NEWS } from "../constants"; 

const initialState = {
    latestNews: [],
}

const news = ( state = initialState, {type, payload}) => {
    console.log(payload)
    switch(type){
        case SET_NEWS:
            console.log('kek')
            return{
                ...state,
                latestNews: payload !== undefined ? [...state.latestNews, ...payload ] : [...state.latestNews]

            };
        default: return state
    }
}

export default news;
