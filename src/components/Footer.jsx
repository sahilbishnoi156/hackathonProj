import React from 'react'
import { ContactDailog } from './Contact'

export default function Footer() {
  return (
    <div className='w-full flex items-center justify-evenly'>
        <div className='bg-[#e0dfce] rounded-xl p-2 px-8 hover:bg-[#d4d3bb] cursor-pointer'>@copyright</div>
        <div className='bg-[#e0dfce] rounded-xl p-2 px-8 hover:bg-[#d4d3bb] cursor-pointer'>About us</div>
        <ContactDailog/>
        
    </div>
  )
}
