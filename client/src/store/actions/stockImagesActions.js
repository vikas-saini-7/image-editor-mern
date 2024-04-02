import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://api.unsplash.com"
const UNSPLASH_ACCESS_KEY = "eetPLspmf88W3J_guJndY3vS23cF-MOq2_Apa8DPnKA"

export const getAllStockImages = createAsyncThunk("getAllStockImages",async () => {
    const response = await fetch(`${BASE_URL}/photos/?client_id=${UNSPLASH_ACCESS_KEY}`);
    const data = await response.json();
    return data;
})