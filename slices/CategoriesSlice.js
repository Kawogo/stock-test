import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories: []
}

const CategoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, {payload}) => {
            state.categories.push(payload)
        },     

        deleteCategory: (state, {payload}) => {
            state.categories = state.categories.filter((category) => category.id !== payload)
        },

        editCategory: (state, {payload}) => {
            category_to_edit = state.categories.find((cat) => cat.id === payload.id)
            category_to_edit.category_name = payload.category_name
        },

    }
})


export const getAllCategories = (state) => state.categories.categories

export const getCategory = (id, state) => state.categories.categories.find((cat) => cat.id === id)

export const { addCategory, deleteCategory, editCategory} = CategoriesSlice.actions

export default CategoriesSlice.reducer