type PanelProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Panel({children, className}:PanelProps){
    return(
        <div className={`flex flex-wrap gap-3 items-center bg-white p-4 rounded-lg shadow-sm
            ${className ?? ''}`}>
            {children}
        </div>
    )
}