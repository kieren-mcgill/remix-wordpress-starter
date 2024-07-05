import {MetaFunction, useLoaderData} from "@remix-run/react";
import { fetchPage } from "~/lib/api/fetch-page";
import WordPressPost from "~/types/wordpress-post.interface";
import getYoastMeta from "~/lib/get-yoast-meta";

export async function loader() {
    const slug = 'home-page';

    const { page, breadcrumbs } = await fetchPage(slug);

    if (!page) {
        throw new Response('Homepage not found', { status: 404 });
    }

    return { page, breadcrumbs };
}

export const meta: MetaFunction = ({data}) => {
    if (!data) {
        return [];
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return getYoastMeta(data.page);
};



const HomePage = () => {
    const {page}: { page: WordPressPost } = useLoaderData();

    return (
        <div>
            <h1 className={"text-red-700"}>{page.title.rendered}</h1>
        </div>
    );
};

export default HomePage;

