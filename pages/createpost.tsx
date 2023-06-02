import React, { useState } from 'react'
import Header from './components/Header';
import axios from 'axios';
import { BASE_URL } from '@/constants/api_all';

export default function createpost() {
    const [inputs, setinputs] = useState({
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
            body:formdata
        })
        res=await res.json()
        console.log(res)
        // console.log(formdata)
        
    }
  return (
    <div>
        <Header/>

        <div  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <img src="" alt="" />
        <input type="text" className=' text-xxl block w-full rounded-md border-0 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
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
                   <button
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
