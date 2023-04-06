import { View, Text } from "react-native";
import {CityComponent} from '../components/City';




export default function CityDetail({route}){
    console.log(route.params)
    const weather= route.params.Weather;
    return (
        <View>
           <CityComponent item={weather.city}/>
            <Text>Visibilité: {weather.visibility}</Text>
            <Text>Type de meteo: {weather.weatherType}</Text>
            <Text>Description: {weather.weatherDescription}</Text>
            <Text>Temperature: {weather.temperature}</Text>
            <Text>Température: ressenti{weather.temperatureFeelsLike}</Text>
            <Text>Humidité: {weather.humidity}</Text>
            <Text>Vitesse: du vent en {weather.windSpeed} kmh</Text>
            <Text>Pression: {weather.pressure}</Text>
        </View>

    );
}

