
import { useLoaderData } from "@remix-run/react";
import WordPressPage from "../types/wordpress-page.interface";
import { fetchPage } from "~/lib/api/fetch-page";

export async function loader() {
    const slug = 'home-page';

    const page: WordPressPage | null = await fetchPage(slug);

    if (!page) {
        throw new Response('Homepage not found', { status: 404 });
    }

    return page;
}

const HomePage = () => {
    const page: WordPressPage = useLoaderData();

    return (
        <div>
            <h1>{page.title.rendered}</h1>
        </div>
    );
};

export default HomePage;
