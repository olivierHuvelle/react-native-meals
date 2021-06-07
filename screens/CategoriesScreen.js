import React from 'react'
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native'

import {CATEGORIES} from "../data/fake-data";


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {props.navigation.navigate({
                routeName : 'CategoryMeals',
                params : {
                    id : itemData.item.id
                }
            })}}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.grid}
                data={CATEGORIES}
                keyExtractor={category => category.id}
                renderItem={category => renderGridItem(category)}
                horizontal={false}
                numColumns={2} />
        </View>
    )
}

CategoriesScreen.navigationOptions = {
    title : 'Categories',
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    grid : {
        width : '100%',
    },
    gridItem : {
        flex : 1,
        margin : 15,
        height : 150,
        borderColor : 'black',
        borderWidth : 1,
    }
})

export default CategoriesScreen