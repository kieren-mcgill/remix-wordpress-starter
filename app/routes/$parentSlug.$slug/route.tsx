import { useLoaderData } from "@remix-run/react";
import WordPressPage from "../../types/wordpress-page.interface";
import Params from "~/types/params.interface";
import pageLoader from "~/lib/pageLoader";
import BreadcrumbLink from "~/components/BreadcrumbLink";
import getYoastBreadcrumb from "~/lib/getYoastBreadcrumb";

export async function loader({ params }: { params: Params }) {

    const { parentSlug, slug } = params;

    const { page, isCorrectPath } = await pageLoader({parentSlug, slug})

    if (!page || !isCorrectPath) {
        throw new Response('Page not found', { status: 404 });
    }

    return page;
}

export const handle = {
    breadcrumb: (data: WordPressPage) => getYoastBreadcrumb(data)
};

const Page = () =>  {
    const page : WordPressPage = useLoaderData();

    return (
        <div>
            <h1>{page.title.rendered}</h1>
        </div>
    );
}

export default Page;