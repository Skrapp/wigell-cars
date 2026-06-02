type PanelProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Panel({children, className}:PanelProps){
    return(
        <div className={`pt-4 pb-4 pl-6 pr-6 
            bg-silver border-white border-4 
            ${className ?? ''}`}>
            {children}
        </div>
    )
}