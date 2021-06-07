import React from 'react'
import {View, Text, TouchableOpacity, FlatList, Platform, StyleSheet} from 'react-native'

import {CATEGORIES} from "../data/fake-data";
import colors from "../theme/colors";


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {props.navigation.navigate({
                routeName : 'CategoryMeals'
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
    headerStyle : {
        backgroundColor : Platform.OS === 'android' ?  colors.primary : '',
        textAlign : 'center'
    },
    headerTintColor :  Platform.OS === 'android' ? 'white' : colors.primary,
    headerTitleStyle : {
        textAlign: 'center'
    }
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