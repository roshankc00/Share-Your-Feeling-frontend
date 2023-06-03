import { ResData, authMessage } from '@/interfaces/authInterface'
import {createSlice} from '@reduxjs/toolkit'
let initialState:authMessage={
    Register:{
        sucess:false,
        message:""
    },
    Login:{
        sucess:false,
        message:"",
        token:""
    },
    Profile:[]
   
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
            state.Login.token=action.payload.token
        },
        getUserProfile:(state,action)=>{
            state.Profile=action.payload           
        }
    },
    
})
export const {registerUser,loginUser,getUserProfile}=authSlice.actions
export default authSlice.reducer