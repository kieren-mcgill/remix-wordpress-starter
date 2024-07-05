import WordPressPage from "~/types/wordpress-page.interface";
import getYoastBreadcrumb from "~/lib/get-yoast-breadcrumb";

export default interface PageLoaderResult {
    page: WordPressPage | null;
    isCorrectPath: boolean;
    breadcrumbs: ReturnType<typeof getYoastBreadcrumb>;
}