import React from 'react'
import { useEffect } from 'react';
import { BASE_URL } from '@/constants/api_all';
import {  useDispatch, useSelector } from 'react-redux';
import PostCard from './components/PostCard';
import Header from './components/Header';
export default function profile() {
    const dispatch=useDispatch()
 
    const getProfile=async()=>{
        const id=localStorage.getItem('getMyProfile')
        const res=await fetch(`${BASE_URL}/user/${id}`,{
            method:"GET",
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        let json=await res.json()
        console.log(json)
        

        
    }
    useEffect(()=>{
        getProfile()

    },[])
  
  return (
    <div className='shadow'>
        <Header/>
        thsns
    </div>
    
  )
}











