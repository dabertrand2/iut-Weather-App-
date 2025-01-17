import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/homeNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from "./redux/store";
import { Provider } from 'react-redux';


export default function App() {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation/>
        </SafeAreaProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
