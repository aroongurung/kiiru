import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getArticleBySlug, getArticles } from "@/lib/articles"

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const articles = await getArticles()
    const slugs = articles.map(article => ({ slug: article.slug }))
    return slugs
}

export default async function Article({ params }: PageProps) {
    const resolvedParams = await params
    const { slug } = resolvedParams
    const article = await getArticleBySlug(slug)

    if (!article) {
        notFound()
    }

    const { metadata, content } = article
    const { title, image, author, publishedAt } = metadata

    return (
        <section className="pb-24 pt-32">
            <div className="container max-w-4xl">
                <Link
                    href="/articles"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-light"
                >
                    <ArrowLeftIcon className="h-5 w-5" />
                    <span>Back to Articles</span>
                </Link>

                {image && (
                    <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
                        <Image
                            src={image}
                            alt={title || ''}
                            className="object-cover"
                            fill
                        />
                    </div>
                )}

                <header className="w-full">
                    <h1 className="title w-full">{title}</h1>
                    <p className="mt-3 text-xs text-muted-foreground w-full">
                        {author} / {formatDate(publishedAt ?? '')}
                    </p>
                </header>

                <main className="prose dark:prose-invert mt-8 max-w-full">
                    <MDXRemote source={content} />
                </main>
                <div className="flex justify-between">
                    <Link
                        href="/articles"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-light"
                    >
                        <ArrowLeftIcon className="h-5 w-5" />
                        <span>Back to Articles</span>
                    </Link>
                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-light"
                    >
                        <span>Back to Home</span>
                        <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}