import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PageTitle from "@/app/components/headings/PageTitle";
import { getBookings, getCars, getUsers } from "@/lib/api";
import BookingTable from "@/app/components/tables/BookingTable";
import { BookingView, User, UserCookie } from "@/lib/types";
import Button from "@/app/components/Button";
import UserTable from "@/app/components/tables/UserTable";

export default async function UsersPage(){
    const cookie = await cookies();
    const userCookie = cookie.get("user");

    if(!userCookie) redirect("/login");

    const user:UserCookie = JSON.parse(userCookie.value);

    if(!user.isAdmin) redirect("/login");

    const users = await getUsers(user.credentials);

    return(
        <div className="boxed-content flex flex-col gap-4">
            <PageTitle>Adminpanelen - Användare</PageTitle>
            <div>
                <UserTable initialUsers={users} credentials={user.credentials}/>
            </div>
        </div>
    )
}