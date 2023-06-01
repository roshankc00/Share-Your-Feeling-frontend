import { ResData } from '@/interfaces/authInterface'
import {createSlice} from '@reduxjs/toolkit'
let initialState:ResData={
    sucess:false,
    message:""
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        registerUser:(state,action)=>{
            state.sucess=action.payload.sucess
            state.message=action.payload.message
        },
        loginUser:(state,action)=>{
            
        }
    }

})
export const {registerUser,loginUser}=authSlice.actions
export default authSlice.reducer