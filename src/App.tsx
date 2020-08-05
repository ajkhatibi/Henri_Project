import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FeedsScreen from './screens/FeedsScreen/FeedsScreen.tsx';
import UsersScreen from './screens/UsersScreen/UsersScreen.tsx';
import TodosScreen from './screens/TodosScreen/TodosScreens.tsx';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feeds" component={FeedsScreen} />
        <Tab.Screen name="Users" component={UsersScreen} />
        <Tab.Screen name="Todos" component={TodosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
