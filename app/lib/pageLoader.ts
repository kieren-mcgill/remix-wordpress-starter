import WordPressPage from "~/types/wordpress-page.interface";
import Params from "~/types/params.interface";
import { fetchPage } from "~/lib/api/fetch-page";
import PageLoaderResult from "~/types/pageLoaderResult.interface";

const pageLoader = async (params: Params): Promise<PageLoaderResult> => {
    const { grandParentSlug, parentSlug, slug } = params;

    const page: WordPressPage | null = await fetchPage(slug);

    let isCorrectPath = false;

    if (page) {
        const pageRelPath = new URL(page.link).pathname;

        if (grandParentSlug && parentSlug) {
            isCorrectPath = pageRelPath === `/${grandParentSlug}/${parentSlug}/${slug}/`;
        } else if (parentSlug) {
            isCorrectPath = pageRelPath === `/${parentSlug}/${slug}/`;
        } else {
            isCorrectPath = pageRelPath === `/${slug}/`;
        }
    }

    return { page, isCorrectPath };
};

export default pageLoader;