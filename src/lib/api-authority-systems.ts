import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 1. Define the interface for your MDX Frontmatter + Content
export interface PostData {
  slug: string;
  content: string;
  title?: string;
  excerpt?: string;
  mdesc?: string;
  author?: string;
  subsystem?: string;
  date?: string;
  featured?: boolean;
  [key: string]: any; // Allows for any other custom frontmatter fields
}

// Path to your MDX files
const postsDirectory = path.join(process.cwd(), "src/content/authority-systems");

// Returns an array of filenames (e.g., ["article-one.mdx", "article-two.mdx"])
export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

// Fetches a single post by its slug and returns only the requested fields
export function getPostBySlug(slug: string, fields: (keyof PostData)[] = []): PostData | null {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Initialize items with the slug
    const items: Partial<PostData> = {};

    // Map through requested fields and populate the return object
    fields.forEach((field) => {
      if (field === "slug") items.slug = realSlug;
      else if (field === "content") items.content = content;
      else if (data[field as string] !== undefined) items[field] = data[field as string];
    });

    return items as PostData;
  } catch (err) {
    console.error(`Error reading MDX file: ${fullPath}`, err);
    return null;
  }
}

// Fetches all posts and sorts them by date (newest first)
export function getAllPosts(fields: (keyof PostData)[] = [], featured: boolean = false): PostData[] {
  let fieldsToFetch = fields;
  
  // If we need to filter by 'featured', ensure 'featured' is in the fetch list
  if (featured && !fields.includes("featured")) {
    fieldsToFetch = [...fields, "featured"];
  }

  // Ensure 'date' is included so we can sort them properly
  if (!fieldsToFetch.includes("date")) {
    fieldsToFetch = [...fieldsToFetch, "date"];
  }

  const slugs = getPostSlugs();
  const allPosts = slugs
    .map((slug) => getPostBySlug(slug, fieldsToFetch))
    .filter((post): post is PostData => post !== null) // Type guard to remove nulls
    .sort((a, b) => {
      // Sort by date in descending order
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateA > dateB ? -1 : 1;
    });

  // Filter if only featured posts were requested
  const posts = featured ? allPosts.filter((post) => post.featured === true) : allPosts;

  return posts;
}