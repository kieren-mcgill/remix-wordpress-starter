import { useLoaderData } from "@remix-run/react";
import WordPressPage from "../types/wordpress-page.interface";
import { fetchPage } from "~/lib/api/fetch-page";

export async function loader() {
    const slug = 'home-page';

    const { page, breadcrumbs } = await fetchPage(slug);

    if (!page) {
        throw new Response('Homepage not found', { status: 404 });
    }

    return { page, breadcrumbs };
}



const HomePage = () => {
    const {page}: { page: WordPressPage } = useLoaderData();

    return (
        <div>
            <h1 className={"text-red-700"}>{page.title.rendered}</h1>
        </div>
    );
};

export default HomePage;

