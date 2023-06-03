import React, { useEffect } from 'react'
import Header from './components/Header';
import axios from 'axios';
import { BASE_URL } from '@/constants/api_all';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '@/slice/postSlice';
import PostCard from './components/PostCard';
import { getUserProfile } from '@/slice/authSlice';


export default function content() {
  const dispach=useDispatch()
  const getProfile=async()=>{
    const res=await fetch(`${BASE_URL}/user/myprofile`,{
        method:"GET",
        headers:{
            token:localStorage.getItem('token')
        }
        
    })
    let json=await res.json()
    console.log(json)
    dispach(getUserProfile(json.profile))
    
    
    
}

  const handleLike=async()=>{
    const res=await fetch(`http://localhost:5000/api/v1/post/like/${props.post._id}`,{
      method:"GET",
      headers:{
        token:localStorage.getItem('token')
      }
    })
    let json=await res.json()
    console.log(json)
  
  }
  let data=useSelector((data:any)=>{return data.postReducer.allPosts})
  console.log(data)
    const fetchDate=async()=>{
        let res=await fetch(`${BASE_URL}/posts`,{
          method:"GET",
          headers:{
            token:localStorage.getItem('token')
          }
        })
        res=await res.json()
        console.log(res)
        dispach(getAllPosts(res))
    }
    useEffect(()=>{
        fetchDate()
        getProfile()
    },[])
  return (
    <div> 
       <Header/>
    <div className='feed'> 
       <div className="flex justify-center  flex-col items-center">
      {data&&
        data.map((el:any)=>{
          console.log(el.likes.length)          
          console.log(el.thumbnail.imgurl)
          return <>
          <PostCard post={el}/>
          </>
        })
        
      }
      </div>
      </div>

            
        </div>

  )
}
