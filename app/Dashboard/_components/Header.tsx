import React from 'react'
import { Search } from 'lucide-react'

export const Header = () => {
  return (
    <div className='p-6 shadow-sm border-b-2 flex justify-between bg-white'>
      <div className='flex gap-2 p-2 items-center border rounded-md max-w-lg '>
         <Search/>
          <input className='outline-none shadow-sm  ' type='text' placeholder='Search...'/>
      </div>
      <div>
        <h2 className='text-white bg-gradient-to-r from-indigo-500 to-indigo-200  rounded-2xl p-2 text-sm'>🔥Join Membership just for $10/Month </h2>
      </div>
    </div>
  )
}


