import React from 'react'
import { Logo } from '../../ui/logo'
import { FooterLinks } from './links/footer-links'
import { FooterHelps } from './helps/footer-helps'    
import { FooterNewsletter } from './newsletter/footer-newsletter'
import { NAV_HELPS, NAV_LINKS } from '../../shared/navigation/navigation'

export function Footer() {

    return (
        <footer className='container mx-auto py-15 gap-5 border-t mt-10 '>

            <div className='flex flex-col justify-center gap-30 items-center lg:items-baseline lg:flex-row lg:justify-between lg:gap-2 max-w-310 mx-auto w-full mb-15'>

                <div className='flex flex-col gap-10'>
                    <Logo/>
                    
                    <div>
                        <p className='font-["Poppins"] text-gray-500'>400 University Drive Suite 200 Coral Gables,</p>
                        <p className='font-["Poppins"] text-gray-500'>FL 33134 USA</p>
                    </div>

                </div>

                <FooterLinks nav_links={NAV_LINKS} />
                <FooterHelps nav_helps={NAV_HELPS} />
                <FooterNewsletter />
                
            </div>

            
            <p className='font-["Poppins"] mt-10 border-t pt-5 border-gray-500'>2026 furino. All rights reverved</p>

        </footer>
    )
}
