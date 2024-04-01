import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://api.github.com"
const apiKey = 'YOUR_API_KEY';

export const getAllIcons = createAsyncThunk("getAllProducts",async () => {
    const response = await fetch(`${BASE_URL}/repos/feathericons/feather/contents/icons`);
    const data = await response.json();
    return data;
})