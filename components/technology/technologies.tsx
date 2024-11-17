import {TechnologyMetadata } from "@/lib/technologies";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface TechnologiesProps {
  technologies: TechnologyMetadata[] | null | undefined;
}

export default function Technologies({ technologies }: TechnologiesProps) {
  // Ensure 'Technologies' is always an array, defaulting to an empty array if it's null or undefined
  const safeTechnologies = Array.isArray(technologies) ? technologies : [];

  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
    {safeTechnologies.length > 0 ? (
      safeTechnologies.map((technology) => (
        <li key={technology.slug} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
          <Link href={`/technologies/${technology.slug}`} passHref>
            {/* Conditionally render the image */}
            {technology.image && (
              <div className="h-72 w-full overflow-hidden bg-muted sm:h-60 group-hover:scale-110 transition-transform duration-500 ease-in-out">
                <Image
                  src={technology.image}
                  alt={technology.title || "Technology image"}
                  fill
                  className="rounded-lg object-cover object-center transition-transform duration-300 ease-in-out"
                />
              </div>
            )}
  
            {/* Text container with hover effects */}
            <div className="absolute inset-x-0 bottom-0 translate-y-2 px-6 py-2 transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:scale-105">
              <h2 className="title line-clamp-1 text-xl no-underline pb-4 text-white group-hover:text-white">
                {technology.title}
              </h2>
  
              {/* Hidden summary and date */}
              <p className="line-clamp-1 text-sm text-muted-foreground hidden">{technology.summary}</p>
              <p className="text-xs font-light text-muted-foreground hidden">
                {formatDate(technology.publishedAt ?? "")}
              </p>
            </div>
          </Link>
        </li>
      ))
    ) : (
      <li className="text-center text-muted-foreground">No technologies available</li>
    )}
  </ul>
  

  );
}
