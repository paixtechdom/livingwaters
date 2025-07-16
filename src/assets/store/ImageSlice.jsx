import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showImageSlide: false,
    imageSrc: "",
    images: [],
    currentFolder: ""
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
        setCurrentFolder: (state, action) => {
            state.currentFolder = action.payload
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


export const { toggleShowImageSlide, setImageSrc, setImages, addImage, clearImage, setCurrentFolder } = imageSlice.actions


export default imageSlice.reducer