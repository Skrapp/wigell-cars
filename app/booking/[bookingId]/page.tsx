import { getBookingById, getUserById } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import EditBookingForm from "@/app/components/forms/EditBookingForm";


type BookingPageProps = {
    params: Promise<{
        bookingId: string;
    }>;
};

export default async function BookingPage({
    params,
}: BookingPageProps) {

    const user = await getUser();

    if(!user){
        redirect("/login");
    }


    const { bookingId } = await params;
    const id = Number(bookingId);

    if (Number.isNaN(id)) {
        return <p>Ogiltigt ID</p>;
    }

    const booking = await getBookingById(id, user.credentials);

    if(!booking){
        return <p>Finns ingen bokning med id {id}</p>
    }

    const bookingOwner = await getUserById(booking?.userId, user.credentials);

    

    return (
        <div>
            <p>Bokning: {booking?.id}</p>
            <EditBookingForm booking={booking} owner={bookingOwner} credentials={user.credentials} />
        </div>
    );
}

