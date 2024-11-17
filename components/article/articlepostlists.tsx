import Link from 'next/link'
import {getTechnologies, TechnologyMetadata } from '@/lib/technologies'
import { ArticleMetadata, getArticles } from '@/lib/articles'


export default async function RecentArticleLists() {
    // Fetch the recent Technologies
    const articles: ArticleMetadata[] = await getArticles(4)
  
    return (
        <section className='pb-24'>
            <div>
                <h2 className='title mb-12'>Recent Article Posts</h2>
                {/* Map over the Article and render only titles as links */}
                <div className='space-y-4'>
                    {articles.map(article => (
                        <div key={article.title} className='technology-title'>
                            {/* Link to the individual Article page using article.slug or a unique identifier */}
                            <Link href={`/articles/${article.slug}`}>
                                <div className='text-[1rem] font-bold title hover:text-primary'>{article.title}</div>
                            </Link>
                        </div>
                    ))}
                </div>

                <Link
                    href='/articles'
                    className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
                >
                    <span>All Article Posts</span>
                </Link>
            </div>
        </section>
    )
}
