export default function StyleGuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div>
            <h1>styleguide layout</h1>
            {children}
        </div>
    )
}