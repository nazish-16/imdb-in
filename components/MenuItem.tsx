import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface MenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className='hover:text-amber-500'>
        <Icon className='text-2xl sm:hidden text-white'/>
        <p className='hidden sm:inline text-md font-semibold m-2 tracking-wide text-white'>{title}</p>
      </Link>
    </div>
  )
}

export default MenuItem
