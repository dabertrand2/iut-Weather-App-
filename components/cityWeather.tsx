import { View, Text, Image, StyleSheet } from "react-native";
import { CityComponent } from "./City";
import { Weather } from "../data/stub";



type LocalWeather ={
    item: Weather;
}

export default function cityWeather( weather: LocalWeather){
    return(
    <View>
        <View style={cityWeatherStyle.container}>
            <CityComponent item={weather.item.city}/>
            <Text style={cityWeatherStyle.text}> Température a: {weather.item.temperature} </Text>
            <Text style={cityWeatherStyle.text}> Resentie : {weather.item.temperatureFeelsLike}</Text>
            
        </View>

        <View>

        </View>
    </View>
)}

const cityWeatherStyle= StyleSheet.create({
    container:{
        flex: 1,
        padding: "2%",
        flexDirection: "column",
        alignSelf: "center",
        
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor:"black",
        backgroundColor: "#BE6E9E"
        
    },
    text:{
        color: "#3A2558",
    },

});