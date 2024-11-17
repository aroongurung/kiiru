import { getFinlandPosts} from '@/lib/finlandposts'
import Link from 'next/link'
import FinlandPosts from '@/components/aboutfinland/finlandposts'

export default async function RecentFinlandPosts() {
    const finlandposts = await getFinlandPosts(4)
  return (
    <section className='pb-24'>
        <div>
            <h2 className='title mb-8'>Recent Finland Posts</h2>
            <FinlandPosts finlandposts = {finlandposts} />

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
