import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './imageSlice'
import iconsReducer from './iconsSlice'
import stockImagesReducer from './stockImagesSlice'

export const store = configureStore({
    reducer: {
        image: imageReducer,
        icons: iconsReducer,
        stockImages: stockImagesReducer,
    },
})