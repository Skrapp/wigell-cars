type HeadingProps = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: HeadingProps) {
  return (
    <h1 className="text-4xl font-bold mb-4">
      {children}
    </h1>
  );
}