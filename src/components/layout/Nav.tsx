"use client";
import React, { useEffect, useState } from 'react'
import LanguageSelector from '../ui/SelectLanguaje'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl';

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const translate = useTranslations("Navbar");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 65); // Cambia el valor según el punto donde deseas cambiar el fondo
      if (currentScrollY > scrollY && currentScrollY > 200) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
      sessionStorage.removeItem("scrollPosition"); // Limpia el valor después de usarlo
    }
  }, []);

  // const scrollToSection = (id: string) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  return (
    <header className={`h-[5rem] flex items-center fixed z-30 top-0 left-0 w-full text-white transition-all duration-500 ${showNav ? "translate-y-0" : "-translate-y-full"}  ${isScrolled ? "bg-[#fdfdfdd6] backdrop-blur-lg" : "bg-transparent"}`}>
      <div className='text-black h-[50px] px-4 max-w-[90%] mx-auto w-full rounded-[16px] flex items-center justify-between'>
        <span className='font-bold'>TRULIVERS</span>
        {/* <nav className='flex items-center gap-2 bg-[#F7F7FD] px-[1rem] py-[0.5rem] rounded-[50px]'>
          <Link href='#' className='text-[14px]'>HOME</Link>
          <Link href='#' className='text-[14px]'>HOME</Link>
          <Link href='#' className='text-[14px]'>HOME</Link>
        </nav> */}
        <div className='flex items-center gap-3'>
          <LanguageSelector />
          <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>{translate("btn")}</Button>
        </div>
      </div>
    </header>
  )
}

export default Nav