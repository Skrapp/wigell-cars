import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PageTitle from "../components/headings/PageTitle";

export default async function Admin(){
    const cookie = await cookies();
    const userCookie = cookie.get("user");

    if(!userCookie) redirect("/login");

    const user = JSON.parse(userCookie.value);

    if(!user.isAdmin) redirect("/login");

    return(
        <div>
            <PageTitle>Adminpanelen</PageTitle>
        </div>
    )
}