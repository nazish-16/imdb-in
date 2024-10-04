'use client'

import { MdLightMode, MdDarkMode } from 'react-icons/md'
import React from 'react'
import { useTheme } from 'next-themes'

const DarkMode = () => {
    const {theme, setTheme, systemTheme} = useTheme()
    const currenTheme = theme === 'system' ? systemTheme : theme
  return (
    <div>
        {
            currenTheme === 'dark'?
            <MdLightMode onClick={() => setTheme('light')} size={26} className='cursor-pointer text-white'/>
            :
            <MdDarkMode onClick={() => setTheme('dark')} size={26} className='cursor-pointer text-white'/>
        }
    </div>
  )
}

export default DarkMode