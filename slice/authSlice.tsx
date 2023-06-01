import {createSlice} from '@reduxjs/toolkit'
let initialState:any=[]
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        registerUser:(state,action)=>{

        },
        loginUser:(state,action)=>{
            
        }
    }

})
export const {registerUser,loginUser}=authSlice.actions
export default authSlice.reducer