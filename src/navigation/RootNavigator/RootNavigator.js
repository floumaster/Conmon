import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenNames from '../../constants/screenNames';
import Home from '../../components/Screens/Home';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerShown: false,
          }}
          initialRouteName={screenNames.Home}
        >
            <Stack.Screen name={screenNames.Home} component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}