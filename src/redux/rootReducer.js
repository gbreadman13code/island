import { combineReducers } from "redux";
import { getNewsReducer } from './Reducers/getNewsReducer';
import { getWeatherReducer } from './Reducers/getWeatherReducer';

export const rootReducer = combineReducers({
    news: getNewsReducer,
    weather: getWeatherReducer,
})