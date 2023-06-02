import React, { useState, SetStateAction } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { mainColor, light, dark } from '@/styles/colors'

const Categories = (props: any) => {
  const { data, filterCategories } = props
  const [indexClick, setIndexClick] = useState(0)

  const selectCategory = (item: any, index: SetStateAction<number>) => {
    setIndexClick(index)
    filterCategories(item)
  }

  const styles = StyleSheet.create({
    activeBg: {
      backgroundColor: mainColor
    },
    notActiveBg: {
      backgroundColor: light
    },
    activeText: {
      color: light
    },
    notActiveText: {
      color: dark
    },
    noMargin: {
      marginRight: 0
    },
    addMargin: {
      marginRight: 10
    },
  })

  return (
    <ScrollView
      className="my-[30px] flex flex-row"
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {data.map((item: any, index: SetStateAction<number>) => (
        <TouchableOpacity
          key={item.key}
          activeOpacity={0.7}
          onPress={() => selectCategory(item, index)}
        >
          <View
            className="h-[98px] w-[60px] p-[5px] rounded-[30px] border-[1px] border-[#d6d6d6]"
            style={{
              ...indexClick === index
                ? styles.activeBg
                : styles.notActiveBg,
              ...index === data.length - 1
                ? styles.noMargin
                : styles.addMargin
            }}
          >
            <Image
              className="h-[50px] w-[50px] rounded-[25px] mb-[6px]"
              source={item.imgSource}
            />
            <Text
              className="text-center text-[12px]"
              style={indexClick === index
                ? styles.activeText
                : styles.notActiveText
              }
            >
              {item.category}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Categories
