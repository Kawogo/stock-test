import { configureStore } from "@reduxjs/toolkit"
import categoriesReducer from "../slices/CategoriesSlice";


const store = configureStore({
    reducer: {
         categories: categoriesReducer
    }
})

export default store;