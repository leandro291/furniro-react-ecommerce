import React, { useState } from 'react'
import { BlogBanner } from './banner/blog-banner'
import { useBlogSearch } from '../../store/blog-search'
import { BlogNoticesSearch } from './notices/blog-notices-search'
import { usePaginationBlogStore } from '../../store/pagination-blog'
import { BLOG_CATEGORIES } from '../../constants/blog/blog-categories'
import { BLOG_INFORMATION } from '../../constants/blog/blog-information'
import { Pagination } from '../../shared/components/pagination/pagination'
import { BlogNoticesInformation } from './notices/blog-notices-information'

export function Blog() {

    const { page, setPage } = usePaginationBlogStore()
    const { search } = useBlogSearch()

    const filteredBlogs = BLOG_INFORMATION.filter((blog_notice) =>
        blog_notice.title.toLowerCase().includes(search.toLowerCase())
    )

    const [ showPerPage, setShowPerPage ] = useState(2)

    const totalPages = Math.ceil(filteredBlogs.length / showPerPage)
    const start = (page - 1) * showPerPage;
    const end = Math.min(page * showPerPage, BLOG_INFORMATION.length);

    const displayedNotices = filteredBlogs.slice(start, end)

    return (
        <section>
            <BlogBanner />
            <div className='my-20 grid grid-cols-1 xl:grid-cols-[800px_1fr] lg:gap-15 xl:gap-25 max-w-350 w-full mx-auto'>
                <BlogNoticesInformation blog={displayedNotices} />
                <BlogNoticesSearch blog={BLOG_INFORMATION} blog_categories={BLOG_CATEGORIES} />
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </section>
    )
}
