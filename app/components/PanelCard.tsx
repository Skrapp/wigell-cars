import type { ReactNode } from "react";
import SectionTitle from "./headings/SectionTitle";

type PanelCardProps = {
    title?: string;
    description?: string;
    actions?: ReactNode;
    className?: string;
    children: ReactNode;
};

export default function PanelCard({
    title,
    description,
    actions,
    className = "",
    children,
}: PanelCardProps) {
    return (
        <section className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
            {(title || description || actions) && (
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                        {title ? <SectionTitle>{title}</SectionTitle> : null}
                        {description ? <p className="text-sm text-gray-600">{description}</p> : null}
                    </div>
                    {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
                </div>
            )}
            {children}
        </section>
    );
}
