import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/project/projects'
import { ProjectMetadata } from '@/lib/projects' // Assuming you have a type definition for ProjectMetadata

export default async function RecentProjects() {
    // Fetch the recent projects
    const projects: ProjectMetadata[] = await getProjects(4)
  
    return (
        <section className='pb-24'>
            <div>
                <h2 className='title mb-12'>Recent projects</h2>
                {/* Pass the actual projects data to the Projects component */}
                <Projects projects={projects} />

                <Link
                    href='/projects'
                    className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
                >
                    <span>All Projects</span>
                </Link>
            </div>
        </section>
    )
}
