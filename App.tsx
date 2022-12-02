import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { SignInScreen } from './src/screens/SignInScreen';
import { MapScreen } from './src/screens/MapScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { SaveStoreScreen } from './src/screens/SaveStoreScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
	return (
		//<NavigationContainer>{
			<Stack.Navigator initialRouteName="Home Screen">
				<Stack.Screen name="Home Screen" component={HomeScreen} />
				<Stack.Screen name="SignUp Screen" component={SignUpScreen} />
				<Stack.Screen name="SignIn Screen" component={SignInScreen} />
				<Stack.Screen name="Map Screen" component={MapScreen} />
				<Stack.Screen name="SaveStoreScreen" component={SaveStoreScreen} />
			</Stack.Navigator>
		//}</NavigationContainer>
	)
}
/*
const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
		<Drawer.Navigator useLegacyImplementation={true} initialRouteName="MapScreen">
			<Drawer.Screen name="Home Screen" component={HomeScreen} />
			<Drawer.Screen name="SignUp Screen" component={SignUpScreen} />
			<Drawer.Screen name="SignIn Screen" component={SignInScreen} />
			<Drawer.Screen name="Map Screen" component={MapScreen} />
		</Drawer.Navigator>
	)
}*/

export default function App() {
	return (
		<NavigationContainer>
			{/* <MyDrawer /> */}
			<MyStack />
		</NavigationContainer>
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