import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    type?: "button" | "submit" | "reset";
};

export default function Button({
    children,
    onClick,
    href,
    type = "button",
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
        type={type}
        onClick={onClick}
        className={classes}>
            {children}
        </button>
    )
}