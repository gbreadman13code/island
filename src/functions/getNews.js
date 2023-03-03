import { getNewsAction } from "../redux/Reducers/getNewsReducer";

const getNews = () => {
    return async (dispatch) => {
        const response = await fetch('https://ostrovkrsk.ru/api/v1/news/');

        const data = await response.json()

        dispatch(getNewsAction(data))
    }
}

export default getNews;