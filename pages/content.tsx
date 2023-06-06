import React, { useEffect } from 'react'
import Header from './components/Header';
import axios from 'axios';
import { BASE_URL } from '@/constants/api_all';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '@/slice/postSlice';
import PostCard from './components/PostCard';


export default function content() {
  const dispach=useDispatch()


  const handleLike=async()=>{
    const res=await fetch(`http://localhost:5000/api/v1/post/like/${props.post._id}`,{
      method:"GET",
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}` 
      }
    })
    let json=await res.json()
  
  }
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
