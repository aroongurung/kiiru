import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { notFound } from "next/navigation"
import {getTechnologies, getTechnologyBySlug} from '@/lib/technologies'
import { MDXRemote } from "next-mdx-remote/rsc"


export async function generateStaticParams() {
    const technologies = await getTechnologies()
    const slugs = technologies.map(technology => ({slug: technology.slug}))

    return slugs
}

export default async function Technology({params}: {params: {slug: string}}) {
    const {slug} = await params
    const technology = await getTechnologyBySlug(slug)

    if (!technology){
        notFound()
    }

    const {metadata, content} = technology
    const {title, image, author, publishedAt} = metadata

  return (
    <section className="pb-24 pt-32">
        <div className="container max-w-4xl">
            <Link
                href='/technologies'
                className="mb-8 inline-flex items-center gap-2 text-sm font-light"
            >
                <ArrowLeftIcon className="¨h-5 w-5" />
                <span>Back to Technology</span>
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
                <h1 className="title w-full">{title}</h1>{/* Ensure full width */}
                <p className="mt-3 text-xs text-muted-foreground w-full">
                    {author} / {formatDate(publishedAt ?? '')}
                </p>
            </header>

            {/* Ensure full width for the content */}
            <main className="prose dark:prose-invert mt-8 max-w-full">
                <MDXRemote source={content} />
            </main>
            <div className="flex justify-between">
                <Link
                    href='/technologies'
                    className="mt-8 inline-flex items-center gap-2 text-sm font-light"
                >
                    <ArrowLeftIcon className="¨h-5 w-5" />
                    <span>Back to Technology</span>
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
