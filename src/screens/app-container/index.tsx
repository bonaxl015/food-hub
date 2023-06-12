import DrawerNavigation from '@/screens/navigation/drawer'

interface AppContainerProps {
  navigation: any
}

const AppContainer: React.FC<AppContainerProps> = (props) => {
  return (
    <DrawerNavigation {...props} />
  )
}

export default AppContainer
