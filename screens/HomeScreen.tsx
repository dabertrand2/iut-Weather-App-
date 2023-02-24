import { StyleSheet, View, Text, FlatList } from "react-native";
import { Weather, WEATHER_DATA } from "../data/stub";
import Test from '../components/cityWeather';

export default function HomeScreen(){
return (

<View style={style.mainView}>
    <View>
        <Text style={style.textStyle}>
            mon home
        </Text>
    </View>
    <View style={style.listStyle} >
       <FlatList data={WEATHER_DATA} renderItem={Test} keyExtractor={(item: Weather) => item.city.name}/>  
    </View>
</View>


);
}

const style = StyleSheet.create({
mainView:{
    flex: 1,
    backgroundColor: '#be6e9e'
},
textStyle:{
    fontSize: 30,
    alignSelf: "center",
    color: "#fff",
},
listStyle:{
    flex: 1,
    justifyContent: "space-between",
    
}
});

