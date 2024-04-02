import { createSlice } from "@reduxjs/toolkit";
import { getAllStockImages } from "./actions/stockImagesActions";

const initialState = {
    stockAllImages: [],
    searchedImages: [],
    loading: false,
    error:null
}

const stockImagesSlice = createSlice({
    name:'stock-images',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // getting all Icons 
        builder.addCase(getAllStockImages.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllStockImages.fulfilled, (state, action) => {
            state.loading = false;
            state.stockAllImages = action.payload;
        })
        builder.addCase(getAllStockImages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})


export default stockImagesSlice.reducer;