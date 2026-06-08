import { getUserById } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import PageTitle from "@/app/components/headings/PageTitle";
import Button from "@/app/components/Button";
import EditUserForm from "@/app/components/forms/EditUserForm";
import { UserCookie } from "@/lib/types";

type UserPageProps = {
    params: Promise<{
        userId: string;
    }>;
};

export default async function UserPage({
    params,
}: UserPageProps) {
    const user = await getUser();

    if (!user) {
        redirect("/login");
    }

    if (!user.isAdmin) {
        redirect("/login");
    }

    const { userId } = await params;
    const id = Number(userId);

    if (Number.isNaN(id)) {
        return <p>Ogiltigt ID</p>;
    }

    const userDetails = await getUserById(id, user.credentials);

    if (!userDetails) {
        return <p>Finns ingen användare med id {id}</p>;
    }

    //TODO sida för att redigera roll

    return (
        <div className="boxed-content flex flex-col gap-4">
            <PageTitle>Användare: {userDetails.username}</PageTitle>
            <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
                <EditUserForm user={userDetails} credentials={user.credentials} />
                <div className="flex items-center gap-2">
                    
                    <Button href="/admin/users">Tillbaka till användare</Button>
                </div>
            </div>
        </div>
    );
}
