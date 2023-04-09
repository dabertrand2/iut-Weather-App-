import {Weather, image} from "../../data/stub";
import { FETCH_WEATHER_DATA,FETCH_WEATHER_CONDITION } from "../constant";


export const setWeathe_Data =( weatherList : Weather[])=>{
    return{
        type: FETCH_WEATHER_DATA,
        payload: weatherList,
    };
}

export const getWeather_Data =() => {
    return async dispatch =>{

        try{
            const weatherPromise = await fetch('https://iut-weather-api.azurewebsites.net/weather');
             const weatherListJson = await weatherPromise.json();
             const weatherList: Weather[] = weatherListJson.map(elt => new Weather(elt["at"], elt["visibility"], elt["weatherType"], elt["weatherDescription"],elt["temperature"], elt["temperatureFeelsLike"], elt["humidity"],elt["windSpeed"],elt["pressure"],elt["city"]));
             dispatch(setWeathe_Data(weatherList));
        }
        catch(error) {
            console.log('Error-----Weather_Data----', error);

        }
    }

}

export const setWeatherCondition =( conditionList : image[]) =>{
    return{
        type: FETCH_WEATHER_CONDITION,
        payload: conditionList,
    };
}


export const getWeather_Condition=() =>{
    return async dispatch =>{

        try{
            const conditionPromise = await fetch('https://iut-weather-api.azurewebsites.net/condition-codes');
            const conditionListJson = await conditionPromise.json();
            const conditionList: image[] = conditionListJson.map(elt => new image(elt["name"],elt["imageUri"]));
            dispatch(setWeatherCondition(conditionList));
        }
        catch(error) {
            console.log('Error----Weather_Condition-----', error);

        }

    }
}





