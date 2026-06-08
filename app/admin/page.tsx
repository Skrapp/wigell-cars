import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PageTitle from "../components/headings/PageTitle";
import Card from "../components/Card";
import CardTitle from "../components/headings/CardTitle";
import Button from "../components/Button";

export default async function AdminPage(){
    const cookie = await cookies();
    const userCookie = cookie.get("user");

    if(!userCookie) redirect("/login");

    const user = JSON.parse(userCookie.value);

    if(!user.isAdmin) redirect("/login");

    return(
        <div className="boxed-content">
            <PageTitle>Adminpanelen</PageTitle>
            <div className=" flex flex-row gap-4">
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
        </div>
    )
}