import { createSlice } from "@reduxjs/toolkit";
import {getAllIcons} from './actions/iconsActions'

const initialState = {
    allIcons: [],
    searchedIcons: [],
    loading: false,
    error:null
}

const iconSlice = createSlice({
    name:'image',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // getting all Icons 
        builder.addCase(getAllIcons.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllIcons.fulfilled, (state, action) => {
            state.loading = false;
            state.allIcons = action.payload;
        })
        builder.addCase(getAllIcons.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})


export default iconSlice.reducer;