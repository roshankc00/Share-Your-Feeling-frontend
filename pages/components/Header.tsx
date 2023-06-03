import { useRouter } from 'next/router'
import React, { useState } from 'react'
import AddHomeIcon from '@mui/icons-material/AddHome';
import ShareIcon from '@mui/icons-material/Share';
import Link from 'next/link';
export default function header() {
  const Router=useRouter()
  return (
    <div>
<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 items-center justify-center my-5 nav-header">
    <li className="mr-2">
        <button  className={`inline-block px-4 py-3 text-black rounded-lg`} aria-current="page" onClick={()=>{
         
          Router.push('/content')
        }}> <AddHomeIcon/> Home</button>
    </li>
    <li className="mr-2">
        <button  className={`inline-block px-4 py-3 text-black rounded-lg`} onClick={()=>{
       
          Router.push('/createpost')
          
        }}>
          <ShareIcon/>
          sharePost</button>
    </li>
    <li>
      <Link href="/profile" className='text-red-900'> view Profile</Link>
    </li>
 
</ul>


    </div>
  )
}
