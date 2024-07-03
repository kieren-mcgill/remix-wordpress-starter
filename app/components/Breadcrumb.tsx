import { useMatches } from "@remix-run/react";

const Breadcrumb = () => {
    const matches = useMatches();

    const breadcrumbs = matches
        .filter((match) => match.handle && match.handle.breadcrumb)
        .map((match) => ({
            elements: match.handle.breadcrumb({ breadcrumbs: match.data.breadcrumbs })
        }));

    return (
        <nav aria-label="breadcrumb">
            <ol>
                {breadcrumbs.flat().map((breadcrumb, index) => (
                    <li key={index}>
                        <a href={breadcrumb.item}>{breadcrumb.name}</a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
