import React from 'react'
import {View, Text, Button, StyleSheet } from 'react-native'

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Category meal screen</Text>
            <Button title="Go to meals details" onPress={() => {props.navigation.navigate('MealDetails')}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default CategoryMealsScreen