import React, { useState } from 'react'
import Header from './components/Header';
import axios from 'axios';
import { BASE_URL } from '@/constants/api_all';
import { createPost } from '@/interfaces/postInterface';

export default function createpost() {
    const [inputs, setinputs] = useState<createPost>({
        caption:"",
        thumbnail:""
    })

 

    const handleCreate=async(e:any)=>{
        e.preventDefault()
        console.log(inputs)
        const formdata=new FormData();
        formdata.append('caption',inputs.caption)
        formdata.append('thumbnail',inputs.thumbnail)
        let res=await fetch(`${BASE_URL}/post/create`,{
            method:"POST",
            body:formdata ,
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        res=await res.json()
        console.log(res)
        // console.log(formdata)
        
        
    }
   
  return (
    <div className=' my-10 flex justify-center  flex-col items-center '>
        <Header/>
        <div  className="my-10 flex flex-col justify-center w-100 content-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg mt-10 ">
        <img src="" alt="" />
        <input type="text" className='p-10 text-xxl block w-full rounded-md border-0 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
        placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6' name="caption" id="" placeholder='Enter the Caption' value={inputs.caption} onChange={(e)=>{
            setinputs({...inputs,caption:e.target.value})
        }}/>
        <img src="" alt="" />
        <div className="mt-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Picture
                  </label>
                  <input
                    id="password"
                    name="thumbnail"
                    type="file"
                    onChange={(e:any)=>{
                        e.preventDefault()
                        setinputs({...inputs,thumbnail:e.target.files[0]})
                    }}
                    enctypes='multipart/form-data'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                   <button disabled={inputs.caption && inputs.thumbnail?false:true}
                type="submit"
                
                onClick={handleCreate}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                done
              </button>

                </div>
 
</div>


        {/*  */}
      
        
    </div>
  )
}
