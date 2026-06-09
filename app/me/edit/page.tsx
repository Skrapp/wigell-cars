import { getUserById } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import Button from "@/app/components/Button";
import EditUserForm from "@/app/components/forms/EditUserForm";
import { UserCookie } from "@/lib/types";
import PageShell from "@/app/components/PageShell";
import PanelCard from "@/app/components/PanelCard";



export default async function UserPage() {
    const user = await getUser();

    if (!user) {
        redirect("/login");
    }

    const userDetails = await getUserById(user.userId, user.credentials);

    if (!userDetails) {
        return <p>Kan inte hämta användare med id: {user.userId}</p>;
    }

    return (
        <PageShell title={`Användare: ${userDetails.username}`}>
            <PanelCard>
                <EditUserForm user={userDetails} credentials={user.credentials} />
                <div className="mt-4 flex items-center gap-2">
                    <Button href="/me">Tillbaka till Mina sidor</Button>
                </div>
            </PanelCard>
        </PageShell>
    );
}
