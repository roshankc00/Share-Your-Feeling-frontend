import {createSlice} from '@reduxjs/toolkit'
const initialState:any={
    allPosts:[],
    likes:0,
    dislikes:0,
}
const postSlice=createSlice({
    name:"Post",
    initialState,
    reducers:{
        createPost:(state,action)=>{},
        updatePost:(state,action)=>{},
        disLikePost:(state,action)=>{
            state.dislikes=action.payload.dislikes.length
        },

        likePost:(state,action)=>{

            state.likes=action.payload.likes.length
        },

        getAllPosts:(state,action)=>{
        state.allPosts=action.payload.posts   
                       
        },

    }

})

export const {createPost,updatePost,disLikePost,getAllPosts,likePost}=postSlice.actions
export default postSlice.reducer