import 'react-native-gesture-handler';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FeedsScreen from './screens/FeedsScreen/FeedsScreen.tsx';
import UsersScreen from './screens/UsersScreen/UsersScreen.tsx';
import TodosScreen from './screens/TodosScreen/TodosScreens.tsx';
import Icon from 'react-native-vector-icons/Feather';
import { Provider } from 'react-redux'
import store from './store';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

    return <Icon name={iconName} size={size} color={color} />;
  },
})

const UserStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={UsersScreen} />
    </Stack.Navigator>
  )
}

const FeedStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feeds" component={FeedsScreen} />
    </Stack.Navigator>
  )
}

const TodosStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todos" component={TodosScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={_screenOptions}
        >
          <Tab.Screen name="Users" component={UserStackScreen} />
          <Tab.Screen name="Feeds" component={FeedStackScreen} />
          <Tab.Screen name="Todos" component={TodosStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
