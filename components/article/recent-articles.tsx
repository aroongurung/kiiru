import Link from 'next/link'
import { ArticleMetadata, getArticles } from '@/lib/articles'
import Articles from './articles'


export default async function RecentArticles() {
    // Fetch the recent projects
    const articles: ArticleMetadata[] = await getArticles(6)
  
    return (
        <section className='pb-24'>
            <div>
                <h2 className='title mb-12'>Recent Articles</h2>
                {/* Pass the actual projects data to the Projects component */}
                <Articles articles={articles} />

                <Link
                    href='/articles'
                    className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
                >
                    <span>All Articles</span>
                </Link>
            </div>
        </section>
    )
}
