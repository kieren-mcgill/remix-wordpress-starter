import {Link} from '@remix-run/react'

const BreadcrumbLink = ({path, name, isLastItem}: { path: string, name: string, isLastItem: boolean }) => {

    return (
        isLastItem ?
            <p>{name}</p>
            :
            <Link to={path}>{name}</Link>
    )
}

export default BreadcrumbLink