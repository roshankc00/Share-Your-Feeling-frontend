import { ResData, authMessage } from '@/interfaces/authInterface'
import {createSlice} from '@reduxjs/toolkit'
let initialState:authMessage={
    Register:{
        sucess:false,
        message:""
    },
    Login:{
        sucess:false,
        message:""
    }
   
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        registerUser:(state,action)=>{
            state.Register.sucess=action.payload.sucess
            state.Register.message=action.payload.message
        },
        loginUser:(state,action)=>{
            state.Login.sucess=action.payload.sucess
            state.Login.message=action.payload.message
            
        }
    }

})
export const {registerUser,loginUser}=authSlice.actions
export default authSlice.reducer