import { getUsersBookings, getCars, getUserById } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import PageTitle from "@/app/components/headings/PageTitle";
import UserBookingTable from "@/app/components/tables/UserBookingTable";
import SectionTitle from "../components/headings/SectionTitle";
import UserProfile from "../components/UserProfile";
import PageShell from "@/app/components/PageShell";
import PanelCard from "@/app/components/PanelCard";

export default async function MePage() {
    const user = await getUser();

    if (!user) {
        redirect("/login");
    }

    const userRich = await getUserById(user.userId, user.credentials); 
    if(!userRich){
        return <div className="boxed-content flex flex-col gap-6">
            <PageTitle>Mina sidor</PageTitle>
            <p>Kan inte hämta användare</p>
            </div>
    }

    const bookings = await getUsersBookings(user.credentials);
    const cars = await getCars();

    const myBookings = bookings
        .map((booking) => {
            const car = cars.find((car) => car.id === booking.carId);

            return {
                id: booking.id,
                carId: booking.carId,
                carModel: car?.model ?? "",
                carName: car?.name ?? "",
                userId: booking.userId,
                userFirstName: user.username,
                userLastName: "",
                fromDate: booking.fromDate,
                toDate: booking.toDate,
                active: booking.active,
            };
        });

    return (
        <PageShell title="Mina sidor">
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
                <UserProfile user={userRich}/>
                <PanelCard title="Dina bokningar">
                    <UserBookingTable bookings={myBookings} />
                </PanelCard>
            </div>
        </PageShell>
    );
}
