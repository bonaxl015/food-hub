import React from 'react'
import { View } from 'react-native'

const TopDecor = () => {
  return (
    <>
      <View className="h-[100px] w-full relative">
        <View className="absolute top-[3px] left-[-46px] h-[96px] w-[96px] rounded-[48px] bg-[#fe724c]" />
        <View className="absolute top-[28px] left-[-20px] h-[38px] w-[38px] rounded-[19px] bg-[#fff]" />
        <View className="absolute top-[-78px] left-[-2px] h-[165px] w-[165px] rounded-[83px] bg-[#ffece7]" />
        <View className="absolute top-[-82px] right-[-96px] h-[181px] w-[181px] rounded-[92px] bg-[#fe724c]" />
      </View>
    </>
  )
}

export default TopDecor
