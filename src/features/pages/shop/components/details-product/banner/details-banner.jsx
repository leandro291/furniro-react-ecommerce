import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightFromLine, ChevronRight } from 'lucide-react'

export function DetailsBanner({ title }) {
    return (
        <div className='container mx-auto bg-orange-50 min-h-24 flex items-center gap-5 px-0 lg:px-20 mt-27 lg:mt-0'>
            <Link to={"/"}>
                <p className='font-["Poppins"] text-base text-gray-600 flex items-center gap-2'>Home <ChevronRight size={16}/></p>
            </Link>
            <Link to={"/shop"}>
                <p className='font-["Poppins"] text-base text-gray-600 flex items-center gap-2'>Shop <ChevronRight  size={16}/></p>
            </Link>
            <ArrowRightFromLine size={16} />
            <p className='font-["Poppins"] text-base'>{title}</p>
        </div>
    )
}
