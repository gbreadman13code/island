import { getWeatherAction } from "../redux/Reducers/getWeatherReducer";

const getWeather = () => {
    return async (dispatch) => {
        const response = await fetch('https://ostrovkrsk.ru/api/v1/weather/temperatures/');

        const data = await response.json()

        dispatch(getWeatherAction(data))
    }
}

export default getWeather;