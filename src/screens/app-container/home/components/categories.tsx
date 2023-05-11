import React, { useState, SetStateAction } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

const Categories = (props: any) => {
  const { data, filterCategories } = props
  const [indexClick, setIndexClick] = useState(0)

  const selectCategory = (item: any, index: SetStateAction<number>) => {
    setIndexClick(index)
    filterCategories(item)
  }

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
              backgroundColor: indexClick === index ? '#fe724c' : '#fff',
              marginRight: index === data.length - 1 ? 0 : 10
            }}
          >
            <Image
              className="h-[50px] w-[50px] rounded-[25px] mb-[6px]"
              source={item.imgSource}
            />
            <Text
              className="text-center text-[12px]"
              style={{
                color: indexClick === index ? '#fff' : '#000',
              }}
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
