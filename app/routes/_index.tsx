import { useLoaderData } from "@remix-run/react";
import WordPressPage from "../types/wordpress-page.interface";
import { fetchPage } from "~/lib/api/fetch-page";
import getYoastBreadcrumb from "~/lib/getYoastBreadcrumb";

export async function loader() {
    const slug = 'home-page';
    const page: WordPressPage | null = await fetchPage(slug);

    if (!page) {
        throw new Response('Homepage not found', { status: 404 });
    }

    const breadcrumbs = getYoastBreadcrumb(page);
    return { page, breadcrumbs };
}

export const handle = {
    breadcrumb: ({ breadcrumbs }: { breadcrumbs: never }) => breadcrumbs
};

const HomePage = () => {
    const { page }: { page: WordPressPage } = useLoaderData();

    return (
        <div>
            <h1 className={"text-red-700"}>{page.title.rendered}</h1>
        </div>
    );
};

export default HomePage;

