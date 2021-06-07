import React from 'react'
import {View, Text, Button, FlatList,  StyleSheet} from 'react-native'

import {CATEGORIES} from "../data/fake-data";

const renderGridItem = (itemData) => {
    return (
        <View style={styles.gridItem}>
            <Text>{itemData.item.title}</Text>
        </View>
    )
}

const CategoriesScreen = props => {
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