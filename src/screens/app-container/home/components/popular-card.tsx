import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Star from '@/assets/featured/star.png'

interface PopularDataProps {
  id: number
  name: string
  imgSource: any
  deliveryCharge: string
  deliveryTime: string
  description: string
  categories: string[]
  verified: boolean
  rating: string
  reviews: string
  price: string
}

interface PopularCardProps {
  data: PopularDataProps[]
}

const PopularCard: React.FC<PopularCardProps> = (
  props: PopularCardProps
) => {
  const { data } = props

  const selectItem = (item: any) => {
    console.log(item)
  }

  const styles = StyleSheet.create({
    noMargin: {
      marginRight: 0
    },
    addMargin: {
      marginRight: 14
    },
    stretch: {
      resizeMode: 'stretch'
    },
    priceTag: {
      position: 'absolute',
      top: 10,
      left: 10,
      paddingVertical: 3,
      paddingHorizontal: 6,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      backgroundColor: '#FFF',
      borderRadius: 12
    },
    ratingWrapper: {
      position: 'absolute',
      bottom: -12,
      left: 10,
      paddingVertical: 4,
      paddingHorizontal: 6,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      backgroundColor: '#FFF',
      borderStyle: 'solid',
      borderWidth: 0.5,
      borderRadius: 12,
      borderColor: '#d6d6d6'
    }
  })

  return (
    <>
      {data.map((item: any, index: any) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.7}
          onPress={() => selectItem(item)}
        >
          <View 
            className="relative w-[180px] rounded-[20px] border-[1px] border-[#d6d6d6]"
            style={index === data.length - 1
              ? styles.noMargin
              : styles.addMargin
            }
          >
            <View>
              <Image
                className="h-[140px] w-[178px] rounded-tl-[19px] rounded-tr-[19px]"
                style={styles.stretch}
                source={item.imgSource}
              />
              <View style={styles.priceTag}>
                <Text className="text-[14px] font-bold">
                  ₱{item.price}
                </Text>
              </View>
              <View style={styles.ratingWrapper}>
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
            <View className="p-[12px]">
              <Text className="text-[16px] font-bold mt-[6px]">
                {item.name}
              </Text>
              <Text className="text-[#8a8e9b] text-[12px] mt-[4px] mb-[8px]">
                {item.description}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  )
}

export default PopularCard
