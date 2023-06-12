import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../bottom-tab'
import Orders from '@/screens/app-container/orders'
import Payment from '@/screens/app-container/payment'
import Profile from '@/screens/app-container/profile'
import Settings from '@/screens/app-container/settings'
import Login from '@/screens/login'
import DrawerContent from './drawer-content'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { mainColor, light } from '@/styles/colors'

const Drawer = createDrawerNavigator()

interface DrawerNavProps {
  navigation: any
}

const DrawerNavigation: React.FC<DrawerNavProps> = ({ navigation }) => {
  const getIcon = (routeName: string) => {
    return {
      Home: 'home',
      "My Orders": 'cart',
      Profile: 'account',
      Payment: 'cash',
      Settings: 'cog',
      "Log Out": 'logout'
    }[routeName]
  }

  const getOptions = (route: any) => {
    return {
      headerShown: false,
      drawerLabelStyle: {
        marginLeft: -25
      },
      drawerActiveBackgroundColor: light,
      drawerActiveTintColor: mainColor,
      drawerInactiveBackgroundColor: mainColor,
      drawerInactiveTintColor: light,
      drawerIcon: ({ focused }: any) => {
        const iconName = getIcon(route.name)
  
        return (
          <MaterialCommunityIcons
            name={iconName}
            size={25}
            color={focused ? mainColor : light}
          />
        )
      }
    }
  }

  return (
    <Drawer.Navigator
      drawerContent={props => (
        <DrawerContent {...props} />
      )}
      screenOptions={
        ({ route }) => getOptions(route)
      }
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="My Orders" component={Orders} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen
        name="Log Out"
        component={Login}
        listeners={{
          drawerItemPress: e => {
            e.preventDefault()
            navigation.navigate('login')
          }
      }}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation