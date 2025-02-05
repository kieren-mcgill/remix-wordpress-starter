import { useLoaderData } from "@remix-run/react";
import WordPressPost from "../../types/wordpress-post.interface";
import Params from "~/types/params.interface";
import { fetchPost } from "~/lib/api/fetch-post";

export async function loader({ params }: { params: Params }) {

    const { slug } = params;

    const {post, breadcrumbs} = await fetchPost(slug);

    if (!post) {
        throw new Response('Post not found', { status: 404 });
    }

    return { post, breadcrumbs };
}

export const handle = {

};

const Post = () =>  {
    const {post} : {post : WordPressPost} = useLoaderData();

    return (
        <div>
            <h1>{post.title.rendered}</h1>
        </div>
    );
}

export default Post;