import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showImageSlide: false,
    imageSrc: "",
    images: []
}

const imageSlice = createSlice({
    name: "imageslice",
    initialState,
    reducers: {
        toggleShowImageSlide: (state, action) => {
            state.showImageSlide = action.payload;
        },
        setImageSrc: (state, action) => {
            state.imageSrc = action.payload
        },
        setImages: (state, action) => {
            state.images = action.payload
        },
        addImage: (state, action) => {
            state.images.push(action.payload)
        },
        clearImage: (state) => {
            state.images = []
        }
    }
})


export const { toggleShowImageSlide, setImageSrc, setImages, addImage, clearImage } = imageSlice.actions


export default imageSlice.reducer