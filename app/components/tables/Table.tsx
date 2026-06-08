type TableProps = {
    headers:string[];
    children: React.ReactNode;
    className?:string;
    classNameHead?:string;
}

export default function Table({
    headers,
    children,
    className,
    classNameHead,
}:TableProps){
    return(  
        <table className={`w-full text-left table-auto min-w-max ${className}`}>
            <thead className={classNameHead}>
                <tr>
                    {headers.map((header) => (
                        <th key={header}>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table> 
    )
}