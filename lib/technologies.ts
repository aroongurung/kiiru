import fs from "fs"
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), 'content', 'technologies')

export type Technology = {
    metadata: TechnologyMetadata
    content: string
}

export type TechnologyMetadata = {
    title?: string
    summary?: string
    image?: string
    author?: string
    publishedAt?: string
    slug: string
}

export async function getTechnologyBySlug(slug: string): Promise<Technology | null>{
    try{
        const filePath = path.join(rootDirectory, `${slug}.mdx`)
        const fileContent = fs.readFileSync(filePath, {encoding:'utf8'})
        //Attempt to parse the frontmatter
        const {data, content} = matter(fileContent)
        return {metadata: { ...data, slug}, content}
    } catch (error){
        console.log("Error fetching Technology field:", error)
        return null
    }    
}

export async function getTechnologies(limit?: number): Promise<TechnologyMetadata[]> {
    const files = fs.readdirSync(rootDirectory)

    const technologies = files
    .map(file => getTechnologyMetadata(file))
    .sort((a, b) => {
        if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')){
            return 1
        }else{
            return -1
        }
    })
    if (limit){
        return technologies.slice(0, limit)
    }
    return technologies
}

export function getTechnologyMetadata(filepath: string): TechnologyMetadata{
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, filepath)
    const fileContent = fs.readFileSync(filePath, {encoding: 'utf8'})
    const {data} = matter(fileContent)
    return {...data, slug}
}