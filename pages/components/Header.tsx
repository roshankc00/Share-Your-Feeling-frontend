import { useRouter } from 'next/router'
import React, { useState } from 'react'
import AddHomeIcon from '@mui/icons-material/AddHome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShareIcon from '@mui/icons-material/Share';
import Link from 'next/link';
import { useSelector } from 'react-redux';
export default function Header() {
  const router=useRouter()
  return (
    <div>
<ul className="flex  gap-10 text-sm font-medium text-center text-gray-500 dark:text-gray-400 items-center justify-center my-5 nav-header mr-10">
    <li className="mr-2">
        <button  className={`inline-block px-4 py-3 text-black rounded-lg`} aria-current="page" onClick={()=>{
         
          router.push('/content')
        }}> <AddHomeIcon/> </button>
    </li>
    <li className="mr-2">
        <button  className={`inline-block px-4 py-3 text-black rounded-lg`} onClick={()=>{
       
          router.push('/createpost')
          
        }}>
          <ShareIcon/>
          </button>
    </li>
    <li>
      <Link href="/Profile" className='text-red-900'> <AccountCircleIcon/> </Link>
    </li>
 
 
</ul>


    </div>
  )
}
