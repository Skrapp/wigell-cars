export default function StyleGuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <main className="boxed-content m-10 space-y-8">
            {children}
        </main>
    );
}