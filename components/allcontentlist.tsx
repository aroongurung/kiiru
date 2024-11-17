import Link from 'next/link'
import { getTechnologies, TechnologyMetadata } from '@/lib/technologies'
import { FinlandPostMetadata, getFinlandPosts } from '@/lib/finlandposts'

export default async function AllContentList() {
    // Fetch the recent Technologys and posts
    const technologies: TechnologyMetadata[] = await getTechnologies(4)
    const finlandposts: FinlandPostMetadata[] = await getFinlandPosts(4)

    // Combine both Technologys and Finlands into one array
    const allContent = [
        ...technologies.map(technolgy => ({ ...technolgy, type: 'technology' })),
        ...finlandposts.map(finlandpost => ({ ...finlandpost, type: 'finlandpost' }))
    ]

    return (
        <section className='pb-24'>
            <div>
                <h2 className='title mb-8'>All Featured Posts</h2>
                {/* Map over the combined content */}
                <div className='space-y-4'>
                    {allContent.map((item, index) => {
                        const slug = item.slug || ''
                        const type = item.type

                        // Construct the correct URL for the technology or Finland post
                        const href = type === 'technology' ? `/technologies/${slug}` : `/finlandposts/${slug}`

                        return (
                            <div key={item.title} className='technolgy-title'>
                                <div className='flex items-start'>
                                    <Link href={href}>
                                        <div className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex text-[1rem] font-bold title hover:text-primary'>
                                            {item.title}
                                        </div>
                                    </Link>

                                    {/* Align the "Most Popular" label immediately after the title */}
                                    {index === 2 && (
                                        <span className='text-sm text-red-500 ml-2 self-start mt-[-1px]'>
                                            Most Popular
                                        </span>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Link to all content */}
                <Link
                    href='/content'
                    className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
                >
                    <span>All Posts</span>
                </Link>
            </div>
        </section>
    )
}
