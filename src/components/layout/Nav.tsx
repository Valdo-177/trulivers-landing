import Link from 'next/link'
import React from 'react'
import LanguageSelector from '../ui/SelectLanguaje'
import { Button } from '../ui/button'

const Nav = () => {
  return (
    <header className='h-[5rem] flex items-end'>
      <div className='text-black h-[50px] w-full mx-auto rounded-[16px] flex items-center justify-between px-4'>
        <span className='font-bold'>TRULIVERS</span>
        <nav className='flex items-center gap-2 bg-[#F7F7FD] px-[1rem] py-[0.5rem] rounded-[50px]'>
          <Link href='#' className='text-[14px]'>HOME</Link>
          <Link href='#' className='text-[14px]'>HOME</Link>
          <Link href='#' className='text-[14px]'>HOME</Link>
        </nav>
        <div className='flex items-center gap-3'>
          <LanguageSelector />
          <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>Haz tu prueba GRATIS</Button>
        </div>
      </div>
    </header>
  )
}

export default Nav