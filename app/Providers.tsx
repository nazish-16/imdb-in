'use client'

import React, { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <div className='dark:text-gray-200 dark:bg-black min-h-screen select-none transition-colors duration-300'>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers
