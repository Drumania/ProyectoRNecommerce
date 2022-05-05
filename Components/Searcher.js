import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const Searcher = ({children, additionalStyles}) => {
  return (
    <View style={{...styles.searcherContainer, ...additionalStyles}} >
      {children}
    </View>
  )
}

export default Searcher

const styles = StyleSheet.create({
  searcherContainer: {
    width: '90%',
    height: 80,
    margin: '5%',
    padding: '5%',
    borderRadius: 10,
    flexDirection: 'row'
   },
})