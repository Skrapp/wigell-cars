import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PageTitle from "@/app/components/headings/PageTitle";
import { getActiveBookings, getCars, getUsers } from "@/lib/api";
import BookingTable from "@/app/components/tables/BookingTable";
import { BookingView, UserCookie } from "@/lib/types";
import Button from "@/app/components/Button";

export default async function Admin(){
    const cookie = await cookies();
    const userCookie = cookie.get("user");

    if(!userCookie) redirect("/login");

    const user:UserCookie = JSON.parse(userCookie.value);

    if(!user.isAdmin) redirect("/login");

    const bookings = await getActiveBookings(user.credentials);
    const cars = await getCars();
    const users = await getUsers(user.credentials);

    const bookingViews: BookingView[] = bookings.map((booking) => {
        const car = cars.find(car => car.id === booking.carId); //find returns the first object that returns true
        const bookingOwner = users.find(user => user.id === booking.userId);

        return {
            id:booking.id,
            carId:booking.carId,
            carModel:car?.model ?? "",
            carName:car?.name ?? "",
            userId:booking.userId,
            userFirstName:bookingOwner?.firstName ?? "",
            userLastName:bookingOwner?.lastName ?? "",
            fromDate:booking.fromDate,
            toDate:booking.toDate,
            active:booking.active,
        }
    })

    return(
        <div className="boxed-content flex flex-col gap-4">
            <PageTitle>Adminpanelen - Bokningar</PageTitle>
            <div>
                <Button href="/admin/bookings">Alla bokningar</Button>
            </div>
            <div>
                <BookingTable initialBookings={bookingViews} credentials={user.credentials}/>
            </div>
        </div>
    )
}