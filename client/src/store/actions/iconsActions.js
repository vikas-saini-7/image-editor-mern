import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://api.github.com"

export const getAllIcons = createAsyncThunk("getAllIcons",async () => {
    const response = await fetch(`${BASE_URL}/repos/feathericons/feather/contents/icons`);
    const data = await response.json();
    return data;
})