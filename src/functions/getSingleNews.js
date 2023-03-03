import { getSingleNewsAction } from "../redux/Reducers/getNewsReducer";

const getSingleNews = (slug) => {
    return async (dispatch) => {
        const response = await fetch('https://ostrovkrsk.ru/api/v1/news/' + slug);

        const data = await response.json()

        dispatch(getSingleNewsAction(data))
    }
}

export default getSingleNews;