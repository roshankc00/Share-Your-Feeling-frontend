import React, { useEffect } from 'react'
import Header from './components/Header';
import axios from 'axios';
import { BASE_URL } from '@/constants/api_all';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '@/slice/postSlice';
import PostCard from './components/PostCard';


export default function content() {
  const dispach=useDispatch()
  let data=useSelector((data:any)=>{return data.postReducer.allPosts})
  console.log(data)
    const fetchDate=async()=>{
        let res=await fetch(`${BASE_URL}/posts`)
        res=await res.json()
        console.log(res)
        dispach(getAllPosts(res))
    }
    useEffect(()=>{
        fetchDate()
    },[])
  return (
    <div>
       <Header/>
       <div className="flex justify-center  flex-col items-center">

      {
        data.map((el:any)=>{
          console.log(el.likes.length)          
          console.log(el.thumbnail.imgurl)
          return <PostCard post={el}/>
        })
        
      }
      </div>

            
        </div>

  )
}
