type HeadingProps = {
    children: React.ReactElement | string;
};

export default function CardTitle({children}:HeadingProps){
    return (
        <h3 className="font-semibold text-lg">
            {children}
        </h3>
    )
}