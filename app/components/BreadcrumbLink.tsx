import WordPressPage from "~/types/wordpress-page.interface";
import { Link }from '@remix-run/react'

const BreadcrumbLink = ({ data }: { data: WordPressPage }) => {

    const urlObj = new URL(data.link)
    const path = urlObj.pathname
    const title =  data.title.rendered
    return (
        <Link to={path}>{title}</Link>
    )
}

export default BreadcrumbLink