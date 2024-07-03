import WordPressPage from "~/types/wordpress-page.interface";

const getYoastBreadcrumb = (data: WordPressPage) => {
    if (!data.yoast_head_json || !data.yoast_head_json.schema) {
        return [];
    }

    const breadcrumbList = data.yoast_head_json.schema['@graph'].find((item) => item['@type'] === 'BreadcrumbList');
    return breadcrumbList ? breadcrumbList.itemListElement : [];
}

export default getYoastBreadcrumb;
