import { getFinlandPosts } from "@/lib/finlandposts"
import SearchFinlandPost from "@/components/aboutfinland/searchfinlandpost"
import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import FinlandContainerCard from "@/components/aboutfinland/containercard-finland"
import FinlandPostLists from "@/components/aboutfinland/finlandpostlists"


export default async function FinlandPostsPage() {
    const finlandposts = await getFinlandPosts()
    
    
  return (
    <section className='pb-24 pt-32'>
        <div className='container max-w-4xl'>
            
            <FinlandContainerCard />
            <FinlandPostLists />
            <h1 className='title mb-12'>Posts</h1>
            <SearchFinlandPost finlandposts = {finlandposts} />
            <div className="flex justify-between">
                    <Link
                        href='/finlandposts'
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

