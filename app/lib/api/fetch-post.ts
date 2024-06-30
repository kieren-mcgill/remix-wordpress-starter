import WordPressPost from "../../types/wordpress-post.interface";

const baseUrl = process.env.WORDPRESS_API_URL;

export async function fetchPost(slug : string) : Promise<WordPressPost | null> {
    const response = await fetch(`${baseUrl}/wp-json/wp/v2/posts?slug=${slug}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch page with slug: ${slug}`);
    }
    const posts : WordPressPost[] = await response.json();

    return posts.length > 0 ? posts[0] : null;
}
