import { getBookingById } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";


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

    const booking = await getBookingById(id, user?.credentials);

    return (
        <div>
            Bokning: {booking?.id}
        </div>
    );
}

