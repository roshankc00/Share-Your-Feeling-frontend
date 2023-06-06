import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import axios from 'axios';
import { BASE_URL } from '@/constants/api_all';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '@/slice/postSlice';
import PostCard from './components/PostCard';

interface handler {
  render:string
}
export default function content() {
  const dispach=useDispatch()
 
     
  let data=useSelector((data:any)=>{return data.postReducer.allPosts})
    const fetchDate=async()=>{
        let res=await fetch(`${BASE_URL}/posts`,{
          method:"GET",
          headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}` 
          }
        })
        res=await res.json()
        dispach(getAllPosts(res))
    }
    useEffect(()=>{
        fetchDate()
    },[])
  return (
    <div> 
       <Header/>
    <div className='feed'> 
       <div className="flex justify-center  flex-col items-center">
      {data&&
        data.map((el:any)=>{

          return <>
          <PostCard key={el._id} post={el}/>
          </>
        })
        
      }
      </div>
      </div>

            
        </div>

  )
}
