import WordPressPage from "../../types/wordpress-page.interface";

const baseUrl = process.env.WORDPRESS_API_URL;

export async function fetchPage(slug : string) : Promise<WordPressPage | null> {
    const response = await fetch(`${baseUrl}/wp-json/wp/v2/pages?slug=${slug}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch page with slug: ${slug}`);
    }
    const pages : WordPressPage[] = await response.json();

    return pages.length > 0 ? pages[0] : null;
}