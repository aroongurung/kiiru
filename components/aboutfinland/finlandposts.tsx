import { FinlandPostMetadata } from "@/lib/finlandposts"
import { formatDate } from "@/lib/utils"
import Link from "next/link"

export default function FinlandPosts({finlandposts}: {finlandposts: FinlandPostMetadata[]}) {
  return (
    <ul className="flex flex-col gap-8">
        {finlandposts.map(finlandpost => (
            <li key={finlandpost.slug} className="border-2 border-zinc-100 p-4 rounded-xl">
                <Link 
                     href={`/finlandposts/${finlandpost.slug}`}
                    className="flex flex-col justify-between gap-x-4 gap-y-1 sm:flex"
                >
                    <div className="max-w-full">
                        <p className="text-2xl font-semibold">{finlandpost.title}</p>
                        <p className="mt-1 line-clamp-2 text-xl font-light text-muted-foreground">
                            {finlandpost.summary}
                        </p>
                    </div>
                    {finlandpost.publishedAt && (
                        <p className="mt-1 text-sm font-light">
                            {formatDate(finlandpost.publishedAt)}
                        </p>
                    )}
                </Link>
            </li>
        ))}
    </ul>
  )
}
