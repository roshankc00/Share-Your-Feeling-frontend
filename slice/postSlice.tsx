import {createSlice} from '@reduxjs/toolkit'
const initialState:any={
    allPosts:[]
}
const postSlice=createSlice({
    name:"Post",
    initialState,
    reducers:{
        createPost:(state,action)=>{},
        updatePost:(state,action)=>{},
        deletePost:(state,action)=>{},
        getaSinglePost:(state,action)=>{},
        getAllPosts:(state,action)=>{
        state.allPosts=action.payload.posts                  
        },

    }

})

export const {createPost,updatePost,deletePost,getAllPosts,getaSinglePost}=postSlice.actions
export default postSlice.reducer