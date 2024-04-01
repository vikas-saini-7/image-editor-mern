import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    imageUrl: null,
    imageName: ''
}

const imageSlice = createSlice({
    name:'image',
    initialState,
    reducers: {
        uploadImage: (state, action) => {
            state.imageUrl = action.payload.url;
            state.imageName = action.payload.name;
        }
    },
})

export const {uploadImage} = imageSlice.actions;

export default imageSlice.reducer;