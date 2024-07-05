import {useLoaderData} from "@remix-run/react";
import Params from "~/types/params.interface";
import pageLoader from "~/lib/page-loader";
import WordPressPage from "~/types/wordpress-page.interface";

export async function loader({params}: { params: Params }) {

    const {slug} = params;
    const {page, isCorrectPath, breadcrumbs} = await pageLoader({slug})

    if (!page || !isCorrectPath) {
        throw new Response('Page not found', {status: 404});
    }

    return {page, breadcrumbs};
}

export const handle = {};

const Page = () => {
    const {page}: { page: WordPressPage } = useLoaderData();

    return (
        <div>
            <h1>{page.title.rendered}</h1>
        </div>
    );
}

export default Page;