import Link from 'next/link'
import {getTechnologies} from '@/lib/technologies'
import Technologies from '@/components/technology/technologies'
import { TechnologyMetadata } from '@/lib/technologies' // Assuming you have a type definition for TechnologyMetadata


export default async function RecentTechnologies() {
    // Fetch the recent projects
    const technologies: TechnologyMetadata[] = await getTechnologies(4)
  
    return (
        <section className='pb-24'>
            <div>
                <h2 className='title mb-12'>Recent Technology Posts</h2>
                {/* Pass the actual projects data to the Projects component */}
                <Technologies technologies={technologies} />

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
