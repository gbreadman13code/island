import { getWeatherAction } from "../redux/Reducers/getWeatherReducer";

const getWeather = () => {
    return async (dispatch) => {
        const response = await fetch('http://80.78.246.206/api/v1/weather/temperatures/');

        const data = await response.json()

        dispatch(getWeatherAction(data))
    }
}

export default getWeather;