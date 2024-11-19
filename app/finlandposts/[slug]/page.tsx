import { getFinlandPostBySlug, getFinlandPosts } from "@/lib/finlandposts"
import { formatDate } from "@/lib/utils"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const finlandPosts = await getFinlandPosts()
    const slugs = finlandPosts.map(post => ({ slug: post.slug }))
    return slugs
}

export default async function FinlandPost({ params}: PageProps) {
    const resolvedParams = await params
    const { slug } = resolvedParams
    const finlandPost = await getFinlandPostBySlug(slug)

    if (!finlandPost) {
        notFound()
    }

    const { metadata, content } = finlandPost
    const { title, image, author, publishedAt } = metadata

    return (
        <section className="pb-24 pt-32">
            <div className="container max-w-4xl">
                <Link 
                    href="/finlandposts" 
                    className="mb-8 inline-flex items-center gap-2 text-sm font-light"
                >
                    <ArrowLeftIcon className="h-5 w-5" />
                    <span>Back to Finland Posts</span>
                </Link>

                {image && (
                    <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
                        <Image 
                            src={image} 
                            alt={title || ""} 
                            className="object-cover" 
                            fill 
                        />
                    </div>
                )}

                <header className="w-full">
                    <h1 className="title w-full">{title}</h1>
                    <p className="mt-3 text-xs text-muted-foreground w-full">
                        {author} / {formatDate(publishedAt ?? "")}
                    </p>
                </header>

                <main className="prose dark:prose-invert mt-8 max-w-full">
                    <MDXRemote source={content} />
                </main>

                <div className="flex justify-between">
                    <Link 
                        href="/finlandposts" 
                        className="mt-8 inline-flex items-center gap-2 text-sm font-light"
                    >
                        <ArrowLeftIcon className="h-5 w-5" />
                        <span>Back to Finland Posts</span>
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