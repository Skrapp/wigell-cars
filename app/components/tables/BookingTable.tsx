"use client"
import { BookingView } from "@/lib/types";
import Table from "./Table";
import Button from "../Button";
import { deleteBooking, returnBooking } from "@/lib/api";
import { useState } from "react";

type BookingListProps = {
    initialBookings:BookingView[];
    credentials:string;
}

export default function BookingTable({
    initialBookings, 
    credentials,
}:BookingListProps){
    const [bookings, setBookings] = useState(initialBookings);

    async function handleBookingReturn(bookingId:number){
        if(confirm(`Återlämna bokning med id: ${bookingId}?`)){
            console.log(`Återlämnar bokning med id: ${bookingId}`);
            const response = await returnBooking(bookingId, credentials)
            if(!response){
                alert(`Bokning kunde ej återlämnas: ${bookingId}`);
            }else{
                setBookings(
                    bookings.map((booking) =>
                        booking.id === bookingId
                            ? {
                                ...booking,
                                active: false
                            }
                            : booking
                ));
            }
        }else{
            console.log("Ej återlämnad")
        }
    }

    async function handleBookingDeletion(bookingId:number){
        if(confirm(`Radera bokning med id: ${bookingId}?`)){
            console.log(`Raderar bokning med id: ${bookingId}`);
            const response = await deleteBooking(bookingId, credentials);
            if(!response){
                alert(`Bokning kunde ej raderas: ${bookingId}`);
            }else{
                setBookings(bookings.filter(
                        booking => booking.id !== bookingId
                ));
            }
        }else{
            console.log("Ej raderad")
        }
    }
    return(
        <div className="flex flex-col w-full overflow-auto bg-white shadow-md rounded-lg 
        p-4">
            {bookings.length === 0 ? (
                <p className="text-center">Inga bokningar hittade</p>
                ) : ( 
                <Table headers={[
                        "Aktiv",
                        "Bil", 
                        "Startdatum", 
                        "Slutdatum", 
                        "Kund", 
                        "Återlämna",
                        "Redigera",
                        "Radera",
                    ]}>
                    {bookings.map((booking) => (
                        
                        <tr key={booking.id} className=" 
                        hover:bg-gray-100">
                            <td className={`border-4 border-white text-center
                                ${booking.active ? "bg-green-500":"bg-gray-200"}`}>
                                    {booking.active ? "aktiv": "ej aktiv"}
                                </td>
                            <td className="p-4">{booking.carId}: {booking.carModel} {booking.carName}</td>
                            <td className="p-4">{booking.fromDate}</td>
                            <td className="p-4">{booking.toDate}</td>
                            <td className="p-4">{booking.userId}: {booking.userFirstName} {booking.userLastName}</td>
                            <td><Button onClick={() => handleBookingReturn(booking.id)} disabled={!booking.active}>Återlämna</Button></td>
                            <td><Button href={`/booking/${booking.id}`}>Redigera</Button></td>
                            <td><Button onClick={() => handleBookingDeletion(booking.id)} variant="destructive">Radera</Button></td>
                        </tr>
                    ))}
                </Table>
            )}
        </div>
    );
}