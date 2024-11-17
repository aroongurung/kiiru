import { getFinlandPostBySlug, getFinlandPosts} from '@/lib/finlandposts'
import { formatDate } from '@/lib/utils'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateStaticParams() {
    const finlandposts = await getFinlandPosts()
    const slugs = finlandposts.map(finlandpost => ({slug: finlandpost.slug}))

    return slugs
}


export default async function FinlandPost({params}: {params: {slug: string}}) {
    const { slug } = await params

    //Fetch the post by slug
    const finlandpost = await getFinlandPostBySlug(slug)

    if (!finlandpost) {
        //If no post found, trigger the 404 page
        notFound()
    }
    
    const {metadata, content} = finlandpost
    const {title, image, author, publishedAt} = metadata

    
  return (
    <section className='pb-24 pt-32'>
        <div className='container max-w-4xl'>
            <Link
                href='/finlandposts'
                className='mb-8 inline-flex items-center gap-2 text-sm font-light'
            >
                <ArrowLeftIcon className='h-5 w-5' />
                <span>Back to Finland Posts</span>
            </Link>

            {image && (
                <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'> 
                    <Image 
                        src={image}
                        alt={title || ''}
                        className='object-cover'
                        fill
                    />
                </div>
            )}

            <header>
                <h1 className='title w-full'>{title}</h1>
                <p className='mt-3 text-xs text-muted-foreground w-full'>
                    {author} / {formatDate(publishedAt ?? '')}
                </p>
            </header>

            <main className='prose dark:prose-invert mt-8 max-w-full'>
                <MDXRemote source={content} />
              
            </main>
            <div className="flex justify-between">
                    <Link
                        href='/finlandposts'
                        className="mt-8 inline-flex items-center gap-2 text-sm font-light"
                    >
                        <ArrowLeftIcon className="¨h-5 w-5" />
                        <span>Back to Finland Posts</span>
                    </Link>
                    <Link
                        href='/'
                        className="mt-8 inline-flex items-center gap-2 text-sm font-light"
                    >
                        <span>Back to Home</span>
                        <ArrowRightIcon className="¨h-5 w-5" />
                    </Link>
                </div>
        </div>
    </section>
  )
}
