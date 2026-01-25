import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/insights");

// Define the shape of your Post for the rest of the app
export interface Post {
  slug: string;
  title: string;
  date: string;
  mdesc: string;
  author: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  redirect?: boolean;
}

export function getPostSlugs() {
  // Add a check to prevent crashing if the directory doesn't exist yet
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): Post | null {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  try {
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // We use 'any' here temporarily while building the object, 
    // but the return type is 'Post | null'
    const items: any = {};

    fields.forEach((field) => {
      if (field === "slug") items.slug = realSlug;
      if (field === "content") items.content = content;
      if (data[field] !== undefined) items[field] = data[field];
    });

    return items as Post;
  } catch (err) {
    return null;
  }
}

export function getAllPosts(fields: string[] = []): Post[] {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, [...fields, "date", "redirect"]))
    // Filter out nulls and redirects
    .filter((post): post is Post => post !== null && !post.redirect)
    // Sort by date (descending)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return posts;
}