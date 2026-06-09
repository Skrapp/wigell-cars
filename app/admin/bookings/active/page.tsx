import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getActiveBookings, getCars, getUsers } from "@/lib/api";
import BookingTable from "@/app/components/tables/BookingTable";
import { BookingView, UserCookie } from "@/lib/types";
import Button from "@/app/components/Button";
import PageShell from "@/app/components/PageShell";
import { getUser } from "@/lib/auth";

export default async function ActiveBookingsPage(){
    const user = await getUser();

    if (!user || !user.isAdmin) {
        redirect("/login");
    }

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
        <PageShell title="Adminpanelen - Bokningar" actions={<Button href="/admin/bookings">Alla bokningar</Button>}>
            <BookingTable initialBookings={bookingViews} credentials={user.credentials}/>
        </PageShell>
    )
}