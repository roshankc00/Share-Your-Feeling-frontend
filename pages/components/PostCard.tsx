import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
function PostCard(props:any) {
  const [inputs, setinputs] = useState({
    comment:"",
    likeHandle:false,
    dislikeHandle:false,
  })

  return (
    <>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={props.post.thumbnail.imgurl}alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.post.caption}</h5>
            <div className="flex gap-2">
            <p> {props.post.likes.length}likes</p>
            <button onClick={()=>{
              setinputs({...inputs,likeHandle:!inputs.likeHandle})
            }}>
              {
               inputs.likeHandle?
                <ThumbUpIcon/>:
                <ThumbUpOffAltIcon/>
              }
              </button>
            </div>
            <div className="flex gap-2">
            <p> {props.post.dislikes.length} dislikes</p>
            <button onClick={()=>{
              setinputs({...inputs,dislikeHandle:!inputs.dislikeHandle})
            }}>
              {
               inputs.dislikeHandle?
                <ThumbDownIcon/>:
                <ThumbDownOffAltIcon/>
              }
              </button>
            </div>
            <p> {props.post.comments.length} comment</p>
            <div className="comments flex gap-2">
            <input
                  id="email"
                  name="email"
                  type="email"
                  value={inputs.comment}
                  onChange={(e:any)=>{
                    e.preventDefault()
                    setinputs({...inputs,comment:e.target.value})
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
               <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Comment</button>

            </div>
        </a>
    </div>
</div>
    </>
  )
}

export default PostCard