import { createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import {Platform} from "react-native";
import colors from "../theme/colors";


import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealDetailsScreen";



const MealsNavigator = createStackNavigator({
    Categories : CategoriesScreen,
    CategoryMeals : CategoryMealsScreen,
    MealDetails : MealsDetailsScreen,
},
{
    defaultNavigationOptions : {
        headerStyle : {
            backgroundColor : Platform.OS === 'android' ?  colors.primary : '',
        },
        headerTintColor :  Platform.OS === 'android' ? 'white' : colors.primary,
    }
})

export default createAppContainer(MealsNavigator)

