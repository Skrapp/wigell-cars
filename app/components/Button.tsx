import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    type?: "button" | "submit" | "reset";
    variant?: "destructive" | "warning" | "icon" | "standard"
};

export default function Button({
    children,
    onClick,
    href,
    type = "button",
    variant = "standard",
}:ButtonProps){
    const baseClasses = `text-center uppercase p-2 
        bg-button border-button-border border-2 rounded-md 
        hover:cursor-pointer  
        transition-all duration-300`

    let variantClasses = "";

    switch (variant){
        case "destructive": 
            variantClasses = "bg-destructive hover:bg-destructive-hover text-destructive-text";
            break;
        case "warning":
            variantClasses = "bg-warning hover:bg-warning-hover";
            break;
        case "icon":
            variantClasses = "rounded-full w-10 h-10 p-0 flex items-center justify-center";
            break;
        case "standard":
        default:
            variantClasses = "hover:bg-silver";
    }

    if(href){
        return(
            <Link href={href} className={`${baseClasses} ${variantClasses}`}>
                {children}
            </Link>
        );
    }

    return(
        <button
        type={type}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses}`}>
            {children}
        </button>
    )
}