import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    language: "fr"
}

const AppSlice = createSlice({
    name: "appslice",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
        },
    }
})


export const { setLanguage } = AppSlice.actions



export default AppSlice.reducer