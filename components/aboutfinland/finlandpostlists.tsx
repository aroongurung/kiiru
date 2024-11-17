import Link from 'next/link'
import { getFinlandPosts} from '@/lib/finlandposts'

export default async function FinlandPostLists() {
    // Fetch the recent Finland Post
    const finlandposts = await getFinlandPosts(4)
  
    return (
        <section className='pb-24'>
            <div>
                <h2 className='title mb-8'>Recent PostList:Finland</h2>
                {/* Map over the Finland Post and render only titles as links */}
                <div className='space-y-4'>
                    {finlandposts.map(finlandpost => (
                        <div key={finlandpost.title} className='finland-title'>
                            {/* Link to the individual finland page using finland.slug or a unique identifier */}
                            <Link href={`/finlandposts/${finlandpost.slug}`}>
                                <div className='text-[1rem] font-bold title  hover:text-primary'>{finlandpost.title}</div>
                            </Link>
                        </div>
                    ))}
                </div>

                <Link
                    href='/finlandposts'
                    className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
                >
                    <span>All Finland Posts</span>
                </Link>
            </div>
        </section>
    )
}
