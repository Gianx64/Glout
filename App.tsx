import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { SignInScreen } from './src/screens/SignInScreen';
import { MapScreen } from './src/screens/MapScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
		<Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
			<Drawer.Screen name="Register Screen" component={RegisterScreen} />
			<Drawer.Screen name="SignIn Screen" component={SignInScreen} />
			<Drawer.Screen name="Map Screen" component={MapScreen} />
		</Drawer.Navigator>
	)
}

export default function App() {
	return (
		<NavigationContainer>{
			<MyDrawer />
		}</NavigationContainer>
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
