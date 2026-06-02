type HeadingProps = {
    children: React.ReactNode;
};

export default function SectionTitle({children}:HeadingProps){
    return(
        <h2 className="font-bold text-2xl mb-2">
            {children}
        </h2>
    )
}