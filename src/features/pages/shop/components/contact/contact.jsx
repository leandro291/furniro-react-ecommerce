import React from 'react'
import { ContactInput } from './input/contact-input'
import { ContactInformation } from './information/contact-information'
import { CONTACTS_INFO } from '../../constants/contact/contact-information'
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner'

export function Contact() {
    return (
        <section className='container mx-auto' >
            <HeroBanner title={"Contact"} />
            <div className='flex flex-col justify-center items-center gap-2 my-20'>
                <div className='max-w-150 w-full flex flex-col gap-4'>
                    <h2 className='text-center font-["Poppins"] font-semibold text-4xl'>Get In Touch With Us</h2>
                    <p className='text-center font-["Poppins"] font-normal text-base text-gray-400'> For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 min-h-160 mt-25  w-full'>
                    <div className='flex flex-col justify-center items-center'>
                        {
                            CONTACTS_INFO.map(({ id, Icon, title, description}) => (
                                <ContactInformation key={id} Icon={Icon} title={title} description={description} />
                            ))
                        }
                    </div>
                    <ContactInput />
                </div>
            </div>
        </section>
    )
}
