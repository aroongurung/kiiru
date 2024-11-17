import Projects from '@/components/project/projects'
import {getProjects}  from '@/lib/projects'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default async function ProjectsPage() {
    const projects = await getProjects()
  return (
    <section className='pb-24 pt-40'>
        <div className='container max-w-4xl'>
            <h1 className='title mb-12'>Projects</h1>
            <Projects projects= {projects} />
            <div className="flex justify-between">
                    <Link
                        href='/projects'
                        className="mt-8 inline-flex items-center gap-2 text-sm font-light"
                    >
                        <ArrowLeftIcon className="¨h-5 w-5" />
                        <span>To Top </span>
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
