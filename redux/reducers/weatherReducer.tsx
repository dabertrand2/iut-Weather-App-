import { FETCH_WEATHER_DATA , FETCH_WEATHER_CONDITION } from "../constant";



const initialState = {
    city_weather: [],
    weather_condition:[],
    favite_city_weather: [],

}



export default appReducer = ( state= initialState, action) => {
    switch(action.type){
        case FETCH_WEATHER_DATA:
            return {...state, city_weather:action.payload};
        case FETCH_WEATHER_CONDITION:
            return{...state, weather_condition:action.payload};

        default:
            return state;
    }
}

