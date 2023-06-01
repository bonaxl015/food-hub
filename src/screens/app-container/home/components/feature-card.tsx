import React, { SetStateAction } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import CheckCircle from '@/assets/featured/check-circle.png'
import Deliver from '@/assets/featured/deliver.png'
import Clock from '@/assets/featured/clock.png'
import Star from '@/assets/featured/star.png'

const FeatureCard = (props: any) => {
  const { data } = props

  const selectItem = (item: any) => {
    console.log(item)
  }

  return (
    <>
      {data.map((item: any, index: SetStateAction<number>) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.7}
          onPress={() => selectItem(item)}
        >
          <View
            className="w-[260px] rounded-[20px] border-[1px] border-[#d6d6d6]"
            style={{
              marginRight: index === data.length - 1 ? 0 : 14
            }}
          >
            <View className="relative">
              <Image
                className="h-[120px] w-[258px] rounded-tl-[19px] rounded-tr-[19px]"
                style={{
                  resizeMode: 'stretch'
                }}
                source={item.imgSource}
              />
              <View
                className="absolute top-[10px] left-[10px] p-[4px] flex-row items-center gap-[2px] bg-[#FFF] rounded-[12px]"
              >
                <Text className="text-[12px] font-bold">
                  {item.rating}
                </Text>
                <Image
                  source={Star}
                  className="h-[10px] w-[12px]"
                />
                <Text className="text-[10px] text-[#8a8e9b]">
                  ({item.reviews})
                </Text>
              </View>
            </View>
            <View className="p-[8px]">
              <View className="mb-[4px] flex flex-row items-center gap-[6px]">
                <Text className="text-[16px] font-bold">
                  {item.name}
                </Text>
                {item.verified && (
                  <Image
                    className="h-[12px] w-[12px]"
                    style={{
                      resizeMode: 'stretch'
                    }}
                    source={CheckCircle}
                  />
                )}
              </View>
              <View className="my-[8px] flex flex-row items-center gap-[16px]">
                <View className="flex flex-row items-center">
                  <Image
                    source={Deliver}
                    className="h-[14px] w-[16px] mr-[6px]"
                    style={{
                      resizeMode: 'stretch'
                    }}
                  />
                  <Text className="text-[12px]">
                    {Number(item.deliveryCharge)
                      ? `₱${item.deliveryCharge}`
                      : item.deliveryCharge
                    }
                  </Text>
                </View>
                <View className="flex flex-row items-center">
                  <Image
                    source={Clock}
                    className="h-[16px] w-[14px] mr-[6px]"
                    style={{
                      resizeMode: 'stretch'
                    }}
                  />
                  <Text className="text-[12px]">
                    {item.deliveryTime}
                  </Text>
                </View>
              </View>
              <View className="flex flex-row flex-wrap mb-[10px] gap-[8px]">
                {item.categories.map((category: any, index: SetStateAction<number>) => (
                  <View
                    key={index}
                    className="py-[4px] px-[8px] rounded-[4px] bg-[#d6d6d6] self-start"
                  >
                    <Text className="text-[10px] text-[#8a8e9b]">
                      {category.toUpperCase()}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  )
}

export default FeatureCard
