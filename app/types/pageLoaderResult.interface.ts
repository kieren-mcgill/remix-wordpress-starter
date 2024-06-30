import WordPressPage from "~/types/wordpress-page.interface";

export default interface PageLoaderResult {
    page: WordPressPage | null;
    isCorrectPath: boolean;
}