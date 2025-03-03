import { useTranslations } from 'next-intl';
import React from 'react'

const Footer = () => {
    const translate = useTranslations("footer");

    return (
        <footer className='flex items-center justify-center bg-[#F7F7FD] h-[14rem]'>
            <div className="px-4 max-w-[75rem] mx-auto w-full">
                <div>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-lg text-primaryBg font-bold mb-3'>TRULIVERS</h2>
                        <span className='font-light text-sm'>{translate("item1")}: (+57) 3013735256</span>
                        <span className='font-light text-sm'>{translate("item2")}:---------</span>
                    </div>
                </div>
                <div>
                    <h3 className='text-xs font-normal mt-6'>©2024 All rights reserved</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer