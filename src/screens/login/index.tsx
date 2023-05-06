import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { TextInput } from 'react-native-paper'
import TopDecor from '@/components/top-decor'
import FacebookIcon from '@/assets/logos/facebook-logo.png'
import GoogleIcon from '@/assets/logos/google-logo.png'

const Login = (props: any) => {
  const { navigation } = props
  const [isRegister, setIsRegister] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)

  const navLoginRegister = () => {
    setIsRegister(prevState => !prevState)
  }

  const submitLoginRegister = () => {
    navigation.navigate('app-container')
  }

  const buttons = [
    {
      key: 'facebook',
      name: 'Facebook',
      iconPath: FacebookIcon
    },
    {
      key: 'google',
      name: 'Google',
      iconPath: GoogleIcon
    }
  ]

  return (
    <>
      <TopDecor />
      <View className="flex my-[16px] mx-[24px]">
        <Text className="font-bold text-[36px] mb-[20px]">
          {isRegister ? 'Sign Up' : 'Login'}
        </Text>
        <View className="flex flex-col gap-[20px]">
          {isRegister && (
            <TextInput
              label="Full name"
              className="bg-[#d6d6d6]"
            />
          )}
          <TextInput
            label="Email"
            className="bg-[#d6d6d6]"
          />
          <TextInput
            label="Password"
            className="bg-[#d6d6d6]"
            secureTextEntry={!isShowPassword}
            right={
              <TextInput.Icon
                onPress={() => setIsShowPassword(prev => !prev)}
                icon={isShowPassword ? 'eye' : 'eye-off'}
              />
            }
          />
        </View>
        <View className="w-full my-[20px] flex justify-center">
          <TouchableOpacity
            className="w-[76%] bg-[#fe724c] mx-auto p-[16px] rounded-[20px]"
            onPress={submitLoginRegister}
            activeOpacity={0.7}
          >
            <Text className="text-[#fff] text-center">
              {isRegister? 'SIGN UP' : 'LOGIN'}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-center mb-[36px] gap-[6px]">
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={navLoginRegister}
            activeOpacity={0.7}
          >
            <Text className="text-[#fe724c] font-bold">
              {isRegister ? 'Login' : 'Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View className="flex flex-row justify-center items-center gap-x-[12]">
            <Text className="h-[30px]">
              _______________
            </Text>
            <Text>
              {`Sign ${isRegister ? 'up' : 'in'} with`}
            </Text>
            <Text className="h-[30px]">
              _______________
            </Text>
          </View>
        </View>
        <View className="flex flex-row mt-[16] mb-[10] justify-between">
          {buttons.map(item => {
            return (
              <TouchableOpacity
                className="
                  w-[130px] flex flex-row py-[10] px-[12] items-center justify-evenly bg-[#fff] rounded-[30px]
                "
                key={item.key}
                activeOpacity={0.7}
              >
                <Image source={item.iconPath} />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    </>
  )
}

export default Login
