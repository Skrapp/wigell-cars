import Button from "./Button";
type CardProps = {
    children: React.ReactNode;
    img?: string;
    imgAlt?: string;
    className?: string;
};

export default function Card({
    children,
    img,
    imgAlt,
    className
}: CardProps) {
    return (
        <div className={`bg-white shadow-lg ${className ?? ''}`}>
            {img && <img src={img} alt={imgAlt} className="w-full h-auto max-h-52 object-cover mb-4 overflow-hidden" />}
            <div className="flex flex-col gap-3 p-4 items-start">
                {children}
            </div>
        </div>
    )
}