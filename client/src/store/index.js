import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './imageSlice'
import iconsReducer from './iconsSlice'

export const store = configureStore({
    reducer: {
        image: imageReducer,
        icons: iconsReducer,
    },
})