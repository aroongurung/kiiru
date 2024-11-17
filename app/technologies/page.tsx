import RecentTechnologiesLists from '@/components/technology/technologypostlists'
import Technologies from '@/components/technology/technologies'
import {getTechnologies}  from '@/lib/technologies'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import TechnologyCardContainer from '@/components/technology/containercard-technology'

export default async function TechnologiesPage() {
    const technologies = await getTechnologies()
  return (
    <section className='pb-24 pt-32'>
        <div className='container max-w-4xl'>
            <TechnologyCardContainer />
            <RecentTechnologiesLists />
            <h1 className='title mb-12'>Tech</h1>
            <Technologies technologies= {technologies} />
            <div className="flex justify-between">
                    <Link
                        href='/technologies'
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
