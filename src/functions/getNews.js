import { getNewsAction } from "../redux/Reducers/getNewsReducer";

const getNews = () => {
    return async (dispatch) => {
        const response = await fetch('http://80.78.246.206/api/v1/news/');

        const data = await response.json()

        dispatch(getNewsAction(data))
    }
}

export default getNews;