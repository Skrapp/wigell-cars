"use client"
import { BookingView } from "@/lib/types";
import Table from "./Table";
import Button from "../Button";
import { deleteBooking } from "@/lib/api";
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

    function returnBooking(bookingId:number){
        if(confirm(`Återlämnar bokning med id: ${bookingId}?`)){
            console.log(`Återlämnar bokning med id: ${bookingId}`);
        }else{
            console.log("Ej återlämnad")
        }
    }

    async function removeBooking(bookingId:number){
        if(confirm(`Radera bokning med id: ${bookingId}?`)){
            console.log(`Raderar bokning med id: ${bookingId}`);
            const response = await deleteBooking(bookingId, credentials);
            if(!response){
                alert(`Bokning kunde ej raderas: ${bookingId}`)
            }
            setBookings(bookings.filter(
                    booking => booking.id !== bookingId
                )
            );
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
                        hover:bg-gray-100 hover:cursor-pointer">
                            <td className="p-4">{booking.carId}: {booking.carModel} {booking.carName}</td>
                            <td>{booking.fromDate}</td>
                            <td>{booking.toDate}</td>
                            <td>{booking.userId}: {booking.userFirstName} {booking.userLastName}</td>
                            <td><Button onClick={() => returnBooking(booking.id)}>Återlämna</Button></td>
                            <td><Button href={`/booking/${booking.id}`}>Redigera</Button></td>
                            <td><Button onClick={() => removeBooking(booking.id)} variant="destructive">Radera</Button></td>
                        </tr>
                    ))}
                </Table>
            )}
        </div>
    );
}