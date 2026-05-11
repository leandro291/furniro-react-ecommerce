import { Search } from 'lucide-react'
import React from 'react'
import { BlogNoticesSearchCard } from './blog-notices-search-card';
import { BlogNoticesSearchPosts } from './blog-notices-search-posts';
import { useBlogSearch } from '../../../store/blog-search';

export function BlogNoticesSearch({ blog, blog_categories}) {

    const { search, setSearch } = useBlogSearch();

    const contar = (category) => blog.filter((notice) => notice.category === category).length;

    return (
        <div>
            <div className='border rounded-2xl py-5 px-4 w-full flex order-first xl:order-last '>
                <input 
                    value={search}
                    type="text"
                    className='flex-1 focus:outline-none'
                    onChange={(e) => setSearch((e.target.value))}
                    placeholder='Search a blog notice...'
                />
                <button><Search size={30} /></button>
            </div>

            <div className='my-10 flex flex-col gap-8 px-10 '>
                <h2 className='font-["Poppins"] font-medium text-2xl'>Categories</h2>
                <ul className='flex flex-col gap-10'>
                    {
                        blog_categories.map(({ id, title }) => (
                            <BlogNoticesSearchCard key={id} title={title} contar={contar} />
                        ))
                    }
                </ul>
            </div>

            <div className='xl:flex hidden   flex-col gap-6 px-10 mt-40'>
                <h3 className='font-["Poppins"] font-medium text-2xl'>Recent Post</h3>
                <div className='flex flex-col gap-3'>
                    {
                        blog.map(({ image, title, date}) => (
                            <BlogNoticesSearchPosts image={image} title={title} date={date} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
