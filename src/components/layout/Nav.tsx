import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <header className='h-[5rem] flex items-end'>
        <div className='bg-white text-black h-[44px] max-w-[60rem] w-full mx-auto rounded-[16px] flex items-center justify-between px-4'>
            <span className='font-bold'>TRULIVERS</span>
            <nav className='flex items-center gap-2'>
                <Link href='#' className='text-[14px]'>HOME</Link>
                <Link href='#' className='text-[14px]'>HOME</Link>
                <Link href='#' className='text-[14px]'>HOME</Link>
            </nav>
        </div>
    </header>
  )
}

export default Nav