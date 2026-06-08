import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PageTitle from "../components/headings/PageTitle";
import { getBookings, getCars, getUsers } from "@/lib/api";
import BookingTable from "../components/tables/BookingTable";
import { BookingView } from "@/lib/types";

export default async function Admin(){
    const cookie = await cookies();
    const userCookie = cookie.get("user");

    if(!userCookie) redirect("/login");

    const user = JSON.parse(userCookie.value);

    if(!user.isAdmin) redirect("/login");

    const bookings = await getBookings(user.credentials);
    const cars = await getCars();
    const users = await getUsers(user.credentials);

    const bookingViews: BookingView[] = bookings.map((booking) => {
        const car = cars.find(car => car.id === booking.carId); //find returns the first object that returns true
        const user = users.find(user => user.id === booking.userId);

        return {
            id:booking.id,
            carId:booking.carId,
            carModel:car?.model ?? "",
            carName:car?.name ?? "",
            userId:booking.userId,
            userFirstName:user?.firstName ?? "",
            userLastName:user?.lastName ?? "",
            fromDate:booking.fromDate,
            toDate:booking.toDate,
        }
    })

    return(
        <div className="boxed-content">
            <PageTitle>Adminpanelen</PageTitle>
            <div>
                <BookingTable bookings={bookingViews}/>
            </div>
        </div>
    )
}