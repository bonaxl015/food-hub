import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import FeatureCard from './feature-card'

const Featured = (props: any) => {
  const { featuredData } = props

  const viewAllFeatured = () => {
    console.log('view all')
  }

  return (
    <>
      <View className="mb-[20px] flex flex-row items-center justify-between">
        <Text className="text-[20px] font-bold">
          Featured Restaurants
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={viewAllFeatured}
        >
          <Text className="text-[12px] text-[#fe724c]">
            View All &gt;
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <FeatureCard data={featuredData} />
      </ScrollView>
    </>
  )
}

export default Featured
