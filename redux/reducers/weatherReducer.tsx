import { FETCH_WEATHER_DATA } from "../constant";



const initialState = {
    city_weather: [],
    favite_city_weather: [],

}



export default appReducer =( state= initialState, action) => {
    switch(action.type){
        case FETCH_WEATHER_DATA:
            return {...state, city_weather:action.payload};
        default:
            return state;
    }
}

