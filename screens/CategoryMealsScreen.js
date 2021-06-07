import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

import {CATEGORIES} from "../data/fake-data";
import colors from "../theme/colors";
import CategoriesScreen from "./CategoriesScreen";


const CategoryMealsScreen = props => {
    const id = props.navigation.getParam('id')
    const selectedCategory = CATEGORIES.find(category => category.id === id)

    return (
        <View style={styles.screen}>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to meals details" onPress={() => {props.navigation.navigate('MealDetails')}}/>
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const id = navigationData.navigation.getParam('id')
    const selectedCategory = CATEGORIES.find(category => category.id === id)
    return {
        title : selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default CategoryMealsScreen