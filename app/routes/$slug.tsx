// routes/$slug.jsx
import { useLoaderData } from "@remix-run/react";
import WordPressPage from "../types/wordpress-page.interface";
import Params from "~/types/params.interface";
import { fetchPage } from "~/lib/api/fetch-page";

export async function loader({ params }: { params: Params }) {

    const { slug } = params; 

    const page : WordPressPage | null = await fetchPage(slug);

    if (!page) {
        throw new Response('Page not found', { status: 404 });
    }

    return page;
    
}

export default function Page() {
    const page : WordPressPage = useLoaderData();

    console.log("wp page data", page)

    return (
        <div>
            <h1>{page.title.rendered}</h1>
        </div>
    );
}