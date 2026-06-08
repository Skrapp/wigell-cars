import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    type?: "button" | "submit" | "reset";
    variant?: "destructive" | "warning" | "icon" |"standard"
    disabled?: boolean;
    className?:string;
};

export default function Button({
    children,
    onClick,
    href,
    type = "button",
    variant = "standard",
    disabled = false,
    className,
}:ButtonProps){
    const baseClasses = `text-center uppercase p-2 
        bg-button border-button-border border-2 rounded-md 
        hover:cursor-pointer  
        transition-all duration-300
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`

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
            <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
                {children}
            </Link>
        );
    }

    return(
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${variantClasses}`}>
            {children}
        </button>
    )
}