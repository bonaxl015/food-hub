import React from 'react'
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import WelcomeBG from '@/assets/welcome-bg-img.png'
import FacebookIcon from '@/assets/logos/facebook-logo.png'
import GoogleIcon from '@/assets/logos/google-logo.png'

const WelcomePage = (props: any) => {
  const { navigation } = props

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

  const goToLoginScreen = () => {
    navigation.navigate('login')
  }

  return (
    <>
      <View className="flex-1">
        <ImageBackground
          source={WelcomeBG}
          resizeMode="cover"
          className="flex-1"
        >
          <View className="flex-1">
            <View className="mt-[140px] mx-[30px]">
              <Text className="font-bold text-[44px]">
                Welcome to
              </Text>
              <Text className="font-bold text-[44px] text-[#fe724c] mb-[10px]">
                FoodHub
              </Text>
              <Text className="text-[16px]">
                Your favorite foods delivered
              </Text>
              <Text className="text-[16px]">
              fast at your door
              </Text>
            </View>
            <View className="mt-[180] mx-[30]">
              <View className="flex flex-row gap-[12] justify-center items-center">
                <Text className="text-[#fff] h-[30px]">
                  _______________
                </Text>
                <Text className="text-[#fff]">
                  Sign in with
                </Text>
                <Text className="text-[#fff] h-[30px]">
                  _______________
                </Text>
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
              <TouchableOpacity
                className="
                  my-[10px] py-[10px] px-[12px] border-[#fff] border-[1px] rounded-[30px]
                "
                activeOpacity={0.5}
                onPress={goToLoginScreen}
              >
                <Text className="text-[#fff] text-center">
                  Start with email or phone
                </Text>
              </TouchableOpacity>
              <View className="flex flex-row gap-x-[8px] m-[14px] justify-center">
                <Text className="text-[#fff]">
                  Already have an account?
                </Text>
                <TouchableOpacity
                  style={{
                    borderBottomColor: '#fff',
                    borderBottomWidth: 1
                  }}
                  activeOpacity={0.7}
                  onPress={goToLoginScreen}
                >
                  <Text className="text-[#fff]">Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  )
}

export default WelcomePage
