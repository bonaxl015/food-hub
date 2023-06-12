import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cart from '@/screens/app-container/cart'
import Home from '@/screens/app-container/home'
import Favorites from '@/screens/app-container/favorites'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { mainColor, iconInactive } from '@/styles/colors'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  const getIcon = (routeName: string) => {
    return {
      Main: 'home',
      Cart: 'cart',
      Favorites: 'heart'
    }[routeName]
  }
  const screenOptions = (route: any) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon: ({ focused }: any) => {
      const iconName = getIcon(route.name)

      return (
        <MaterialCommunityIcons
          name={iconName}
          size={focused ? 30 : 25}
          color={focused ? mainColor : iconInactive}
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
      <Tab.Screen name="Main" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  )
}

export default BottomNavigation
