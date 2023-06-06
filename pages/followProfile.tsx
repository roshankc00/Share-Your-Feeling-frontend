import React from 'react'
import { useEffect } from 'react';
import { BASE_URL } from '@/constants/api_all';
import {  useDispatch, useSelector } from 'react-redux';
import PostCard from './components/PostCard';
import Header from './components/Header';
import { getFollowProfile } from '@/slice/authSlice';
export default function profile() {
    const dispatch=useDispatch()
    const data=useSelector((data:any)=>{
        console.log(data.authReducer.followUser.profile?.url);
        return data.authReducer.followUser;
    })
 
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
        dispatch(getFollowProfile(json.profile));
        // localStorage.setItem('render',`${Math.random()*199999}`)
    }

    useEffect(()=>{
        getProfile()

    },[])
  
 
  return (
    <div className='shadow'>
    <Header/>
{data&&
    <div className='flex justify-center  flex-col items-center mt-10  '> 
    <img src={data.profile?.url} className='rounded-full h-40 w-40' alt=""/>
    <h1 className='font-bold text-3xl'> {data.name}</h1>
    <div className='flex gap-5'>
    <button className=''>Follow me</button>
    </div>
    <h1 className='font-bold text-xl my-10'> all the posts</h1>
    <div>
        {data&&
            data?.posts?.map((el:any)=>{
                console.log(el)
            return   <PostCard key={el._id} post={el}/>
            })
        }
    </div>



</div>
}
</div>

    
  )
}











