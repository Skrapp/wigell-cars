import Link from "next/link"
import { PageItem } from "../pages"
type NavigationProps = {
    pages: PageItem[];
    className?: string;
}

export default function Navigation({
    pages,
    className
}:NavigationProps){
    return(
        <div className={`flex flex-row gap-3 items-center justify-center-safe w-full
        p-4 ${className ?? ''}`}>
            {pages.map((page) =>(
                <Link key={page.href}
                className="hover:font-extrabold"
                href={page.href}>
                    {page.title}
                </Link>
            ))}
        </div>
    )
}