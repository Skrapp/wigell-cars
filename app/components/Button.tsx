import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
};

export default function ButtonStandard({
    children,
    onClick,
    href,
}:ButtonProps){
    const classes = `text-center uppercase p-2 
        bg-button border-button-border border-2 rounded-md 
        hover:cursor-pointer hover:bg-silver 
        transition-all duration-300`

    if(href){
        return(
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return(
        <button
        onClick={onClick}
        className={classes}>
            {children}
        </button>
    )
}