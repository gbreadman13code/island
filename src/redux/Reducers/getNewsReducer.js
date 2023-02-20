const initialState = {
    news: false,
    single_news: false,
}

const GET_NEWS = 'GET_NEWS';
const GET_SINGLE_NEWS = 'GET_SINGLE_NEWS';

export const getNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {...state,
                news: action.payload,
            };
        case GET_SINGLE_NEWS:
            return {...state,
                single_news: action.payload,
            };
        default:
            return state
    }
}

export const getNewsAction = (payload) => ({type: GET_NEWS, payload})
export const getSingleNewsAction = (payload) => ({type: GET_SINGLE_NEWS, payload})