 import { configureStore } from "@reduxjs/toolkit";
 import postReducer from './postSlice'; 
 import visibilityReducer from './visibilitySlice'

 export default configureStore({
    reducer: { 
        posts: postReducer,
        visibility: visibilityReducer
    }
 });