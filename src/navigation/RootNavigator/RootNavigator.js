import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from './CustomTabBar';

import Home from '../../components/Screens/Home'
import ChartNavigator from '../ChartNavigator';
import CategoryNavigator from '../CategoryNavigator';
import SpendingNavigator from '../SpendingNavigator';

import screenNames from '../../constants/screenNames';
import HomeIcon from '../../components/Icons/Home';
import Chart from '../../components/Icons/Chart';
import CategoriesIcon from '../../components/Icons/Categories';
import Money from '../../components/Icons/Money';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
              headerShown: false,
          }}
          initialRouteName={screenNames.Spendings}
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
              name={screenNames.SpendingsStack}
              component={SpendingNavigator}
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
              name={screenNames.ChartStack}
              component={ChartNavigator}
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
