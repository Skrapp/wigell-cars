import { redirect } from "next/navigation";
import UserTable from "@/app/components/tables/UserTable";
import PageShell from "@/app/components/PageShell";
import { getUser } from "@/lib/auth";
import { getUsers } from "@/lib/api";
import Button from "@/app/components/Button";

export default async function UsersPage(){
    const user = await getUser();

    if (!user || !user.isAdmin) {
        redirect("/login");
    }

    const users = await getUsers(user.credentials);

    return(
        <PageShell title="Adminpanelen - Användare" actions={<Button href="/admin">Tillbaka</Button>}>
            <UserTable initialUsers={users} credentials={user.credentials}/>
        </PageShell>
    )
}