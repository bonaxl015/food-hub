import React from 'react'
import { View, Text, Image } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps
} from '@react-navigation/drawer'
import User from '@/assets/user.png'
import { mainColor, light } from '@/styles/colors'

const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  return (
    <>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: mainColor,
          flex: 1
        }}
      >
        <View className="p-[20px]">
          <Image
            className="h-[80px] w-[80px] rounded-[40px] mb-[12px]"
            source={User}
          />
          <Text className={`text-[20px] font-bold mb-[4px] text-[${light}]`}>
            Wally Bold King
          </Text>
          <Text className={`text-[${light}]`}>
            wallybayola@gmail.com
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </>
  )
}

export default DrawerContent
