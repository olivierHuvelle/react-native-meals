import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Catégories screen</Text>
            <Button title="Go to meals" onPress={() => {props.navigation.navigate({ routeName : 'CategoryMeals'})}}/>
            <Button title="Go to meals" onPress={() => {props.navigation.navigate('CategoryMeals')}}/>
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

export default CategoriesScreen