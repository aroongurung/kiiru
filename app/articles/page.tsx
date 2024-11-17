import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import Articles from '@/components/article/articles'
import { getArticles } from '@/lib/articles'
import RecentArticleLists from '@/components/article/articlepostlists'
import ArticleCardContainer from '@/components/article/containercard-article'

export default async function ArticlesPage() {
    const articles = await getArticles()
  return (
    <section className='pb-24 pt-32'>
        <div className='container max-w-4xl'>
            <ArticleCardContainer />
            <RecentArticleLists />
            <h1 className='title mb-12'>Article Posts</h1>
            <Articles articles= {articles} />
            <div className="flex justify-between">
                    <Link
                        href='/articles'
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
