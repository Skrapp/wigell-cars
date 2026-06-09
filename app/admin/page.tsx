import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Card from "../components/Card";
import CardTitle from "../components/headings/CardTitle";
import Button from "../components/Button";
import PageShell from "../components/PageShell";
import { getUser } from "@/lib/auth";

export default async function AdminPage(){
    const user = await getUser();

    if (!user || !user.isAdmin) {
        redirect("/login");
    }

    return(
        <PageShell title="Adminpanelen">
            <div className="flex flex-row gap-4">
                <Card className="flex-1">
                    <CardTitle>Hantera bilar</CardTitle>
                    <p>Hantera alla bilar</p>
                    <Button href="/admin/cars">Bilar</Button>
                </Card>
                <Card className="flex-1">
                    <CardTitle>Hantera användare</CardTitle>
                    <p>Hantera användare</p>
                    <Button href="/admin/users">Användare</Button>
                </Card>
                <Card className="flex-1">
                    <CardTitle>Hantera bokningar</CardTitle>
                    <p>Hantera alla bokningar</p>
                    <Button href="/admin/bookings">Bokningar</Button>
                </Card>
            </div>
        </PageShell>
    )
}