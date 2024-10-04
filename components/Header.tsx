import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { MdPrivacyTip } from 'react-icons/md'
import Link from 'next/link'
import DarkMode from './DarkMode'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-3 max-w-6px mx-auto bg-[#131312]'>
        <div className='flex gap-4 items-center'>
            <MenuItem title="Home" address="/" Icon={AiFillHome}/>
            <MenuItem title="About" address="/about" Icon={MdOutlineRoundaboutRight}/>
            <MenuItem title="Conditions" address="/conditions" Icon={HiAcademicCap}/>
            <MenuItem title="Privacy" address="/privacy" Icon={MdPrivacyTip}/>
            <input type="text" className='bg-gray-300 px-16 xl:px-40 py-1 hidden lg:inline rounded-md text-black' placeholder='Search Movies & TV Shows'/>
        </div>
        <div className='flex items-center gap-4'>
            <DarkMode/>
        <div className='flex items-center'>
            <Link href="/" className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-md'>IMDb</Link>
        </div>
        </div>
    </div>
  )
}

export default Header
