import { BASE_URL } from '@/constants/api_all';
import { getUserProfile } from '@/slice/authSlice';
import React from 'react'
import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import PostCard from './components/PostCard';
import Header from './components/Header';
export default function profile() {
    const dispatch=useDispatch()
    const data=useSelector((data:any)=>{
        return data.authReducer.Profile[0];
    })

    const getProfile=async()=>{
        const res=await fetch(`${BASE_URL}/user/myprofile`,{
            method:"GET",
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
            
        })
        let json=await res.json()
        // console.log(json,"wpw")
        dispatch(getUserProfile(json.profile))
        

        
    }
    useEffect(()=>{
        getProfile()

    },[])
  
  return (
    <div className='shadow'>
        <Header/>
    {data&&
        <div className='flex justify-center  flex-col items-center mt-10  '> 
        <img src={data.profile.url} className='rounded-full h-40 w-40' alt=""/>
        <h1 className='font-bold text-3xl'> {data.name}</h1>
        <div className='flex gap-5'>
        <button className=''>Follow me</button>
        </div>
        <h1 className='font-bold text-xl my-10'> all the posts</h1>
        <div>
            {
                data.posts.map((el:any)=>{
                return   <PostCard key={el._id} post={el}/>
                })
            }
        </div>



    </div>
}
    </div>
    
  )
}
