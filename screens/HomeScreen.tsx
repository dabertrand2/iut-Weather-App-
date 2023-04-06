import { StyleSheet, View, Text, FlatList, TouchableHighlight } from "react-native";
import { Weather } from "../data/stub";
import Test from '../components/cityWeather';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWeather_Data } from "../redux/actions/action";



export default function HomeScreen({route,navigation}){
    const weatherList=useSelector(state => state.appReducer.city_weather) 
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        const loadNounours = async () => {
          await dispatch(getWeather_Data());
        };
        loadNounours();
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
            <Test item={item}/>
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

