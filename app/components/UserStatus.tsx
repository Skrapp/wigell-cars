import { cookies } from "next/headers";
import Button from "./Button";
import LogoutButton from "./LogoutButton";

type UserStatusProps = {
    className?: string;
};

export default async function UserStatus({
    className,
}: UserStatusProps) {
    const cookie = await cookies();
    const userCookie = cookie.get("user");
    const wrapperClass = `inline-flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-2 text-sm shadow-sm shadow-slate-200/50 ${className ?? ""}`;

    if (!userCookie) {
        return (
            <div className={wrapperClass}>
                <span className="text-slate-600">Du är inte inloggad</span>
                <Button href="/login" className="whitespace-nowrap">Logga in</Button>
            </div>
        );
    }

    const user = JSON.parse(userCookie.value);

    return (
        <div className={wrapperClass}>
            <div className="space-y-0.5">
                <p className="text-sm font-semibold text-slate-900">Hej {user.username}!</p>
                <p className="text-xs text-slate-500">Välkommen tillbaka</p>
            </div>
            <LogoutButton className="whitespace-nowrap" />
        </div>
    );
}