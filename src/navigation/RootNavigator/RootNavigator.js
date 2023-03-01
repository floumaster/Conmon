import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import screenNames from '../../constants/screenNames';
import Home from '../../components/Screens/Home';
import Finances from '../../components/Screens/Finances';
import Categories from '../../components/Screens/Categories';
import Charts from '../../components/Screens/Charts';

import CustomTabBar from './CustomTabBar';
import HomeIcon from '../../components/Icons/Home';
import Chart from '../../components/Icons/Chart';
import CategoriesIcon from '../../components/Icons/Categories';
import Money from '../../components/Icons/Money';
import CategoryNavigator from '../CategoryNavigator';
import colors from '../../constants/colors';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
              headerShown: false,
          }}
          initialRouteName={screenNames.Finances}
          tabBar={props => <CustomTabBar {...props}/>}
        >
            <Tab.Screen
              name={screenNames.Home}
              component={Home}
              options={({ route }) => {
                return {
                  tabBarVisible: true,
                  tabBarIcon: HomeIcon,
                  title: "Home"
                }
              }}
            />
            <Tab.Screen
              name={screenNames.Finances}
              component={Finances}
              options={({ route }) => {
                return {
                  tabBarVisible: true,
                  tabBarIcon: Money,
                  title: "Finances"
                }
              }}
            />
            <Tab.Screen
              name={screenNames.CategoriesStack}
              component={CategoryNavigator}
              options={({ route }) => {
                return {
                  tabBarVisible: true,
                  tabBarIcon: CategoriesIcon,
                  title: "Categories"
                }
              }}
            />
            <Tab.Screen
              name={screenNames.Charts}
              component={Charts}
              options={({ route }) => {
                return {
                  tabBarVisible: true,
                  tabBarIcon: Chart,
                  title: "Charts"
                }
              }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
