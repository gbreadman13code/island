const initialState = {
    water_temperature: false,
    air_temperature: false,
}

const GET_WEATHER = 'GET_WEATHER';

export const getWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {...state,
                water_temperature: action.payload.water_temperature === null ? false : action.payload.water_temperature,
                air_temperature: action.payload.air_temperature === null ? false : action.payload.air_temperature,
            };
        default:
            return state;
    }
}

export const getWeatherAction = (payload) => ({type: GET_WEATHER, payload})