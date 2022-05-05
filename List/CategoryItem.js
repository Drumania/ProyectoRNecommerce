import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const CategoryItem = ({category}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category.category}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: colors.secundary,
    margin: 1,
  },
  text: {
    color: colors.purewhite,
    fontSize: 20
  }
})