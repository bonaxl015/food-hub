import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import User from '@/assets/user.png'

interface HeaderProps {
  navigation: any
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const openSideMenu = () => navigation.openDrawer()

  return (
    <View className="flex flex-row items-center justify-between h-[80px] pt-[10px]">
      <TouchableOpacity
        onPress={openSideMenu}
        activeOpacity={0.7}
      >
        <MaterialCommunityIcons
          name="menu"
          size={30}
          color="#000"
        />
      </TouchableOpacity>
      <View className="flex items-center gap-[4px]">
        <Text className="text-[14px] font-bold text-[#8c9099]">
          Deliver to
          <MaterialCommunityIcons
            name="chevron-down"
            size={16}
          />
        </Text>
        <Text className="text-[14px] font-bold text-[#fe724c]">
          4102 Pretty View Lane
        </Text>
      </View>
      <View>
        <Image
          className="h-[40px] w-[40px] rounded-[6px]"
          source={User}
        />
      </View>
    </View>
  )
}

export default Header
