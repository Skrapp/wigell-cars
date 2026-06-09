import type { ReactNode } from "react";
import PageTitle from "./headings/PageTitle";

type PageShellProps = {
    title?: string;
    subtitle?: string;
    actions?: ReactNode;
    className?: string;
    children: ReactNode;
};

export default function PageShell({
    title,
    subtitle,
    actions,
    className = "",
    children,
}: PageShellProps) {
    return (
        <div className={`boxed-content flex flex-col gap-4 ${className}`}>
            {(title || subtitle || actions) && (
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-2">
                        {title ? <PageTitle>{title}</PageTitle> : null}
                        {subtitle ? <p className="text-gray-600">{subtitle}</p> : null}
                    </div>
                    {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
                </div>
            )}
            {children}
        </div>
    );
}
