import { getBookingById, getUserById } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import EditBookingForm from "@/app/components/forms/EditBookingForm";
import PageTitle from "@/app/components/headings/PageTitle";
import Card from "@/app/components/Card";


type EditBookingPageProps = {
    params: Promise<{
        bookingId: string;
    }>;
};

export default async function EditBookingPage({
    params,
}: EditBookingPageProps) {

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

    //TODO bild på bil

    return (
        <div className="boxed-content flex flex-col gap-4">
            <PageTitle>Bokning: {booking.id}</PageTitle>
            <Card>
                <p className="text-center">Bokning: {booking?.id}</p>
                <EditBookingForm 
                    booking={booking} 
                    owner={bookingOwner} 
                    credentials={user.credentials} 
                    className="m-auto"
                />
            </Card>
        </div>
    );
}

