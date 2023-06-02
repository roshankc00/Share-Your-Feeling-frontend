import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function header() {
  const Router=useRouter()
  return (
    <div>
<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 items-center justify-center my-5">
    <li className="mr-2">
        <button  className={`inline-block px-4 py-3 text-black rounded-lg`} aria-current="page" onClick={()=>{
         
          Router.push('/content')
        }}>Home</button>
    </li>
    <li className="mr-2">
        <button  className={`inline-block px-4 py-3 text-black rounded-lg`} onClick={()=>{
       
          Router.push('/createpost')
          
        }}>sharePost</button>
    </li>
 
</ul>

    </div>
  )
}
