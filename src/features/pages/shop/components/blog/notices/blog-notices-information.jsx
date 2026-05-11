import React from 'react'
import { Search } from 'lucide-react';
import { BlogNoticesInformationCard } from './blog-notices-information-card'

export function BlogNoticesInformation({ blog }) {



    return (
        <div className='flex flex-col mx-auto sm:px-2 gap-15 order-last xl:order-first'>

            {
                blog.map(({ id, image, user, date, category, title, description }) => (
                    <BlogNoticesInformationCard 
                        key={id} 
                        image={image} 
                        user={user} 
                        date={date} 
                        category={category} 
                        title={title} 
                        description={description} 
                    />
                ))
            }
            
        </div>
    )
}
