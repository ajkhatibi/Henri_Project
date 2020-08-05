import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FeedsScreen from './screens/FeedsScreen/FeedsScreen.tsx';
import UsersScreen from './screens/UsersScreen/UsersScreen.tsx';
import TodosScreen from './screens/TodosScreen/TodosScreens.tsx';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const _screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === "Users") {
      iconName = 'users';
    } else if (route.name === "Feeds") {
      iconName = 'rss';
    } else if (route.name === "Todos") {
      iconName = "check-square";
    }

    // You can return any component that you like here!
    return <Icon name={iconName} size={size} color={color} />;
  },
})

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={_screenOptions}
      >
        <Tab.Screen name="Users" component={UsersScreen} />
        <Tab.Screen name="Feeds" component={FeedsScreen} />
        <Tab.Screen name="Todos" component={TodosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
