import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cart from './cart'
import Home from './home'
import Favorites from './favorites'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

const AppContainer = () => {
  const getIcon = (routeName: string) => {
    return {
      Home: 'home',
      Cart: 'cart',
      Favorites: 'heart'
    }[routeName]
  }
  const screenOptions = (route: any) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon: ({ focused }) => {
      const iconName = getIcon(route.name)

      return (
        <MaterialCommunityIcons
          name={iconName}
          size={focused ? 30 : 25}
          color={focused ? '#fe724c' : '#d3d1d8'}
        />
      )
    }
  })

  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => screenOptions(route)
      }
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  )
}

export default AppContainer
