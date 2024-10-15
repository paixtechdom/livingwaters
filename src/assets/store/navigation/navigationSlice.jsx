// store

import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    showNavbar: false,
    currentNav: 0,
    currentDropDownIndex: 0,
    scrolledDown: false,
    currentDropDown: ""    
}

 

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        toggleShowNav: (state) => {
            state.showNavbar = !state.showNavbar;
        },
        setCurrentNav: (state, action) => {
            state.currentNav = action.payload
        },
        setCurrentDropDownIndex: (state, action) => {
            state.currentDropDownIndex = action.payload
        },
        toggleScrolledDown: (state, action) => {
            state.scrolledDown = action.payload
        },
        setCurrentDropDown: (state, action) => {
            state.currentDropDown = action.payload
        },
    }
})


export const { toggleShowNav, setCurrentNav, setCurrentDropDownIndex, toggleScrolledDown, setCurrentDropDown } = navigationSlice.actions


export default navigationSlice.reducer