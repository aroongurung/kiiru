import Link from 'next/link'
import {getTechnologies, TechnologyMetadata } from '@/lib/technologies'


export default async function RecentTechnologyLists() {
    // Fetch the recent Technologies
    const technologies: TechnologyMetadata[] = await getTechnologies(4)
  
    return (
        <section className='pb-24'>
            <div>
                <h2 className='title mb-12'>Recent Technology Posts</h2>
                {/* Map over the Technology and render only titles as links */}
                <div className='space-y-4'>
                    {technologies.map(technology => (
                        <div key={technology.title} className='technology-title'>
                            {/* Link to the individual technology page using technolgy.slug or a unique identifier */}
                            <Link href={`/technologies/${technology.slug}`}>
                                <div className='text-[1rem] font-bold title hover:text-primary'>{technology.title}</div>
                            </Link>
                        </div>
                    ))}
                </div>

                <Link
                    href='/technologies'
                    className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
                >
                    <span>All Technology Posts</span>
                </Link>
            </div>
        </section>
    )
}
