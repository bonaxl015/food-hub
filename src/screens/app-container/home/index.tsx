import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import Header from '@/components/header'
import Categories from './components/categories'
import Featured from './components/featured'
import Popular from './components/popular'
import { categories } from './data/categories'
import { featured } from './data/featured'

interface HomeScreenProps {
  navigation: any
}

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [featuredData, setFeaturedData] = useState(featured)

  const filterCategories = (data: any) => {
    const filterData = featured.filter(
      item => item.categories.includes(data.category)
    )
    setFeaturedData(filterData)
  }

  return (
    <>
      <ScrollView
        className="mx-[16px]"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Header navigation={navigation} />
        <Text className="mt-[8px] mb-[16px] w-[300px] text-[28px] font-bold">
          What would you like to order
        </Text>
        <TextInput
          mode="outlined"
          outlineColor="#9aa0b4"
          placeholder="Find for food or restaurant"
          left={
            <TextInput.Icon icon="magnify" />
          }
        />
        <Categories
          data={categories}
          filterCategories={filterCategories}
        />
        <Featured featuredData={featuredData} />
        <Popular />
      </ScrollView>
    </>
  )
}

export default Home
