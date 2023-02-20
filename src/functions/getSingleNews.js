import { getSingleNewsAction } from "../redux/Reducers/getNewsReducer";

const getSingleNews = (slug) => {
    return async (dispatch) => {
        const response = await fetch('http://80.78.246.206/api/v1/news/' + slug);

        const data = await response.json()

        dispatch(getSingleNewsAction(data))
    }
}

export default getSingleNews;