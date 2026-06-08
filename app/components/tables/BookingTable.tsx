"use client"
import { BookingView } from "@/lib/types";
import Table from "./Table";
import Button from "../Button";

type BookingListProps = {
    bookings:BookingView[];
}

export default function BookingTable({
    bookings
}:BookingListProps){

    function editBooking(bookingId:number){
        console.log(`Till redigering av bokning: ${bookingId}`)
    }

    function showBooking(bookingId:number){
        console.log(`Till bokning: ${bookingId}`)
    }

    function deleteBooking(bookingId:number){
        console.log(`Radera bokning: ${bookingId}`)
    }
    return(
        <div className="relative flex flex-col w-full overflow-auto bg-white shadow-md rounded-lg 
        p-4">
            {bookings.length === 0 ? (
                <p className="text-center">Inga bokningar hittade</p>
                ) : ( 
                <Table headers={[
                        "Bil", 
                        "Startdatum", 
                        "Slutdatum", 
                        "Kund", 
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
                            <td><Button href={`/booking/${booking.id}`}>Redigera</Button></td>
                            <td><Button onClick={() => deleteBooking(booking.id)} variant="destructive">Radera</Button></td>
                        </tr>
                    ))}
                </Table>
            )}
        </div>
    );
}