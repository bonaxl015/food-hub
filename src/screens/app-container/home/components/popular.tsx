import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import PopularCard from './popular-card'
import { popular } from '../data/popular'

const Popular = () => {
  return (
    <>
      <View className="my-[20px] mx-[0] flex flex-row items-center justify-between">
        <Text className="text-[20px] font-bold">
          Popular Items
        </Text>
      </View>
      <ScrollView
        className="mb-[20px]"
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <PopularCard data={popular} />
      </ScrollView>
    </>
  )
}

export default Popular
