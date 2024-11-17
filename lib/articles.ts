import fs from "fs"
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), 'content', 'articles')

export type Article = {
    metadata: ArticleMetadata
    content: string
}

export type ArticleMetadata = {
    title?: string
    summary?: string
    image?: string
    author?: string
    publishedAt?: string
    slug: string
}

export async function getArticleBySlug(slug: string): Promise<Article | null>{
    try{
        const filePath = path.join(rootDirectory, `${slug}.mdx`)
        const fileContent = fs.readFileSync(filePath, {encoding:'utf8'})
        //Attempt to parse the frontmatter
        const {data, content} = matter(fileContent)
        return {metadata: { ...data, slug}, content}
    } catch (error){
        console.log("Error fetching Article Posts:", error)
        return null
    }    
}

export async function getArticles(limit?: number): Promise<ArticleMetadata[]> {
    const files = fs.readdirSync(rootDirectory)

    const articles = files
    .map(file => getArticleMetadata(file))
    .sort((a, b) => {
        if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')){
            return 1
        }else{
            return -1
        }
    })
    if (limit){
        return articles.slice(0, limit)
    }
    return articles
}

export function getArticleMetadata(filepath: string): ArticleMetadata{
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, filepath)
    const fileContent = fs.readFileSync(filePath, {encoding: 'utf8'})
    const {data} = matter(fileContent)
    return {...data, slug}
}