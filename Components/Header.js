import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.middle,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: '100%',
    flexDirection:'columns',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, 
  }
})