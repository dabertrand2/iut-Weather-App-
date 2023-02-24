import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';


export default function Navigation(){
    const BottomTabNavigator = createBottomTabNavigator();
return(
    <NavigationContainer>
        <BottomTabNavigator.Navigator initialRouteName="Home">
            <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                      options={{title: 'Home',}}/>
            <BottomTabNavigator.Screen name="Settings" component={SettingScreen}
                                           options={{
                                               title: 'Settings',
                                           }}/>

        </BottomTabNavigator.Navigator>
    </NavigationContainer>


);
}
/*
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} {...props} />;
}
*/
