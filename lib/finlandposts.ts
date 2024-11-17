import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Directory where finlandposts are located
const rootDirectory = path.join(process.cwd(), "content", "finlandposts");

// Defining the FinlandPost and FinlandPostMetadata types
export interface FinlandPostMetadata {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  image?: string;   // Optional image field
  author?: string;  // Optional author field
}

export interface FinlandPost {
  metadata: FinlandPostMetadata;
  content: string;
}

// Fetch a Finlandpost by slug
export async function getFinlandPostBySlug(slug: string): Promise<FinlandPost | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = await fs.promises.readFile(filePath, "utf8");

    // Parse the frontmatter and content using gray-matter
    const { data, content } = matter(fileContent);

    // Ensure all required fields are in the returned metadata
    const metadata: FinlandPostMetadata = {
      title: data.title,
      slug,
      summary: data.summary ?? "", // If summary is not present, default to an empty string
      publishedAt: data.publishedAt ?? "", // Default to empty string if not available
      image: data.image,  // Optional field
      author: data.author, // Optional field
    };

    // Return the Finlandpost's metadata and content
    return { metadata, content };
  } catch (error) {
    console.error("Error fetching Finlandpost:", error);
    return null;
  }
}

// Fetch all Finlandposts with optional limit
export async function getFinlandPosts(limit?: number): Promise<FinlandPostMetadata[]> {
  const files = await fs.promises.readdir(rootDirectory);

  // Map through each file and get its metadata
  const finlandposts = await Promise.all(
    files.map(async (file) => getFinlandPostMetadata(file))
  );

  // Sort Finlandposts by publish date
  finlandposts.sort((a, b) => {
    if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
      return 1;
    } else {
      return -1;
    }
  });

  // If a limit is provided, slice the finlandposts
  return limit ? finlandposts.slice(0, limit) : finlandposts;
}

// Fetch the metadata of a single post
export async function getFinlandPostMetadata(filepath: string): Promise<FinlandPostMetadata> {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = await fs.promises.readFile(filePath, "utf8");

  // Parse frontmatter
  const { data } = matter(fileContent);

  // Return the full metadata including all required fields
  return {
    title: data.title,
    slug,
    summary: data.summary ?? "",
    publishedAt: data.publishedAt ?? "",
    image: data.image, // Optional field
    author: data.author, // Optional field
  };
}
