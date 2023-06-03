import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Link from 'next/link';
import { json } from 'stream/consumers';
import { BASE_URL } from '@/constants/api_all';
function PostCard(props:any) {
  const [inputs, setinputs] = useState({
    comment:"",
    likeHandle:false,
    dislikeHandle:false,
  })
  // handle like
const handleLike=async()=>{
  const res=await fetch(`http://localhost:5000/api/v1/post/like/${props.post._id}`,{
    method:"GET",
    headers:{
      token:localStorage.getItem('token')
    }
  })
  let json=await res.json()
  console.log(json)
  setinputs({...inputs,likeHandle:!inputs.likeHandle})

  console.log(!inputs.likeHandle)

}
//handledislike
const handleDisike=async()=>{
  const res=await fetch(`http://localhost:5000/api/v1/post/dislike/${props.post._id}`,{
    method:"GET",
    headers:{
      "Content-Type": "application/json",
      token:localStorage.getItem('token')
      
      },
  })
  let json=await res.json()
  console.log(json)

  console.log(!inputs.likeHandle)

}






// handle comment 
const handleComment=async()=>{
  let data:any={
    comment:inputs.comment,
    postId:props.post._id
  }
  // const res=await fetch(`${BASE_URL}/comment/create`,{
  //   method:"POST",
  //   headers:{
  //     token:localStorage.getItem('token')
  //   },
  //   body:JSON.stringify(data),
  // })
  // console.log(await res.json())
  console.log(data)
  setinputs({...inputs,comment:""})
}
  return (
    <>
<div className="shadow">

  <div className="profile flex gap-1  p-3">
    <img src={props.post.user.profile.url}className='h-20 w-20 rounded-full' alt="profile"/>
    <Link href='/profile' className='text-2xl font-bold mt-5'>{props.post.user.name}</Link>
  </div>

    <div >
    <h5 className="m-2 ps-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.post.caption}</h5>
        <img className=" p-3 w-50 h-50 thumbnail-image" src={props.post.thumbnail.imgurl}alt="" />
    </div>
    <div className="p-5">
        <div className='like'>
      <div className="all-likes-comment flex gap-2 mb-4">
            <div className="flex gap-2 " >
            <p> {props.post.likes.length} likes</p>
            <button onClick={()=>{
              handleLike()
            }}>
              {
               inputs.likeHandle?
                <ThumbUpIcon/>:
                <ThumbUpOffAltIcon/>
              }
              </button>
            </div>
            {/* end likes */}
           
            <div className="flex gap-2">
            <p> {props.post.dislikes.length} dislikes</p>
            <button onClick={(e)=>{
              e.preventDefault()
              handleDisike()
              setinputs({...inputs,dislikeHandle:!inputs.dislikeHandle})
            }}>
              {
               inputs.dislikeHandle?
                <ThumbDownIcon/>:
                <ThumbDownOffAltIcon/>
              }
              </button>
            </div>
            {/* mdk */}
            <p> {props.post.comments.length} comment</p>
            </div>
            <div className="comments flex gap-2">
            <input
                  id="comment"
                  name="comment"
          
                  type="comment"
                  value={inputs.comment}
                  onChange={(e:any)=>{
                    e.preventDefault()
                    setinputs({...inputs,comment:e.target.value})
                  }}
                  required
                  className="p-4 w-full rounded-md border-0 py-1.5 text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
               <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleComment}>Comment</button>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default PostCard