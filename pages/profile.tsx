import { BASE_URL } from '@/constants/api_all';
import { getUserProfile } from '@/slice/authSlice';
import React from 'react'
import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

export default function profile() {
    const dispatch=useDispatch()
    const getProfile=async()=>{
        const res=await fetch(`${BASE_URL}/user/myprofile`,{
            method:"GET",
            headers:{
                token:localStorage.getItem('token')
            }
            
        })
        let json=await res.json()
        console.log(json)
        dispatch(getUserProfile(json.profile))
        
        
        
    }
    useEffect(()=>{
        getProfile()

    },[])


  return (
    <>
    <div> 
        <img src="" alt="" />
    </div>
    </>
    
  )
}
