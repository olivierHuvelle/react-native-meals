import { createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealDetailsScreen";


const MealsNavigator = createStackNavigator({
    Categories : CategoriesScreen,
    CategoryMeals : CategoryMealsScreen,
    MealDetails : MealsDetailsScreen,
})

export default createAppContainer(MealsNavigator)

