import { StyleSheet, View, Text, FlatList, TouchableHighlight } from "react-native";
import { Weather } from "../data/stub";
import CityWeatherComponent from '../components/cityWeather';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWeather_Data,getWeather_Condition } from "../redux/actions/action";



export default function HomeScreen({route,navigation}){
    const weatherList=useSelector(state => state.appReducer.city_weather) 
    const conditionList=useSelector(state =>state.appReducer.weather_condition)
    const dispatch = useDispatch();
    
    useEffect(() => {
        const loadWeather = async () => {
          await dispatch(getWeather_Data());
        };
        loadWeather();
        const loadCondition = async ()=>{
            await dispatch(getWeather_Condition());
        };
        loadCondition();
      }, [dispatch]);
   
   
   
    return (

<View style={style.mainView}>
    <View>
        {/*<Text style={style.textStyle}>
            
</Text>*/}
    </View>
    <View style={style.listStyle} >
       <FlatList data={weatherList} renderItem={({item})=>
        <TouchableHighlight onPress={() => navigation.navigate("CityDetails",{"Weather": item})}>
            <CityWeatherComponent item={item} item2={conditionList.imageUri}/>
        </TouchableHighlight>
        }keyExtractor={(item: Weather) => item.city.name}/>  
    </View>
</View>
);
}

const style = StyleSheet.create({
mainView:{
    flex: 1,
    backgroundColor: '#8D71B4'
},
textStyle:{
    fontSize: 30,
    alignSelf: "center",
    color: "#fff",
},
listStyle:{
    flex: 1,
    
    justifyContent: "space-around",
    
}
});

