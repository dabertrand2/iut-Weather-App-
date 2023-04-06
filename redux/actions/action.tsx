import {Weather} from "../../data/stub";
import { FETCH_WEATHER_DATA } from "../constant";


export const setWeathe_Data =( weatherList : Weather[])=>{
    return{
        type: FETCH_WEATHER_DATA,
        payload: weatherList,
    };
}

export const getWeather_Data =()=>{
    return async dispatch =>{

        try{
            const weatherPromise = await fetch('https://iut-weather-api.azurewebsites.net/weather');
             const weatherListJson = await weatherPromise.json();
             const weatherList: Weather[] = weatherListJson.map(elt => new Weather(elt["at"], elt["age"], elt["nbPoils"], elt["image"]));
             dispatch(setWeathe_Data(weatherList));
        }
        catch


    }

}






