
import { View, Text , StyleSheet} from "react-native"
import { City } from "../data/stub";

type PropsCity ={
    item: City
}

export function CityComponent ( city : PropsCity)
{
return(
    <View >
        <Text style={cityStyle.name}> Ville: {city.item.name}</Text>
        <Text style={cityStyle.text}> 
        Latitude: {city.item.latitude} Longitude: {city.item.longitude} 
        </Text>

    </View>

)}



const cityStyle= StyleSheet.create({

    text:{
        fontSize: 11,
        color:"white"
    },
    name:{
        color: "#3A2558",
    },

});