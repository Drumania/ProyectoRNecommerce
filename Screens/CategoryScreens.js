import { StyleSheet, View, TextInput,Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Searcher from '../Components/Searcher'
import List from '../List'
import { colors } from '../Styles/Colors'
import { CATEGORIES } from '../Data/Categories'

const CategoryScreens = () => {


  const [input, setInput] = useState('');
  const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES)


  useEffect(()=> {
    if (input === "") setCategoriesFilter(CATEGORIES)
    else {
        console.log("Se ejecuta el efecto");
        let categoriasFiltradas = categoriesFilter.filter(category => category.category.toLowerCase().includes(input.toLowerCase()))
        setCategoriesFilter(categoriasFiltradas)
    }
}, [input])


  return (
    <>
      <Header />
      <Searcher 
        style={styles.searcherContainer} 
        additionalStyles={{ backgroundColor: colors.primary }}
      >
        <TextInput
          value={input}
          onChangeText={setInput}
          keyboardType="default"
          style={styles.inputText}
        />
        <TouchableOpacity style={styles.inputSubmit}>
          <Text style={styles.inputSubmitText}>Find</Text>
        </TouchableOpacity>
      </Searcher>
      <View style={styles.listContianer}>
        <List data={categoriesFilter} itemType={"category"}/>
      </View>
    </>
  )
}

export default CategoryScreens

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: colors.purewhite,  
    height: 40,   
    padding: 10,    
    width: '80%',
  },
  inputSubmit: {
    backgroundColor: colors.primary,  
    height: 40,   
    padding: 10,
    width: '20%',
  },
  inputSubmitText: {
    color: colors.white,
    textAlign: 'center'
  }
    
})
