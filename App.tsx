import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import MapScreen from './src/screens/MapScreen';
import HomeScreen from './src/screens/HomeScreen';
import SaveStoreScreen from './src/screens/SaveStoreScreen';
import UserScreen from './src/screens/UserScreen';
import ShowStoreScreen from './src/screens/ShowStoreScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator initialRouteName="SignIn Screen">
			<Stack.Screen name="Home Screen" component={HomeScreen} />
			<Stack.Screen name="User Screen" component={UserScreen} />
			<Stack.Screen name="SignUp Screen" component={SignUpScreen} />
			<Stack.Screen name="SignIn Screen" component={SignInScreen} />
			<Stack.Screen name="Map Screen" component={MapScreen} />
			<Stack.Screen name="SaveStoreScreen" component={SaveStoreScreen} />
			<Stack.Screen name="ShowStoreScreen" component={ShowStoreScreen} />
		</Stack.Navigator>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}