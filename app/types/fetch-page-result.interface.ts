import WordPressPage from "~/types/wordpress-page.interface";
import getYoastBreadcrumb from "~/lib/get-yoast-breadcrumb";

export default interface FetchPageResult {
    page: WordPressPage | null;
    breadcrumbs: ReturnType<typeof getYoastBreadcrumb>;
};