import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        createPost(state, action) {
            console.log(state);
            console.log(action);

            state.posts.push({
                name: action.payload.name,
                description: action.payload.description
            })
        },

        editPost(state, action) {}, 
        deletePost(state, action ) {}
    }
})

export const { createPost, editPost, deletePost  } = postSlice.actions;
export default postSlice.reducer; 