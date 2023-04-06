import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Weather } from "../data/stub";
import HomeScreen from "../screens/HomeScreen";
import CityDetail from "../screens/CityDetail";


export default function StackNavigation(){
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"CityList"}}/>
        <Stack.Screen name="CityDetails" component={CityDetail}/>
    </Stack.Navigator>

  );
}