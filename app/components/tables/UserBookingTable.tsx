"use client";

import { BookingView } from "@/lib/types";
import Table from "./Table";

type UserBookingTableProps = {
    bookings: BookingView[];
};

export default function UserBookingTable({ bookings}: UserBookingTableProps) {
    return (
        <div className="flex flex-col w-full overflow-auto bg-white shadow-md rounded-lg p-4">
            {bookings.length === 0 ? (
                <p className="text-center">Du har inga bokningar just nu.</p>
            ) : (
                <Table headers={[
                    "ID", 
                    "Aktiv", 
                    "Bil", 
                    "Startdatum", 
                    "Slutdatum"
                    ]}>
                    {bookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-100">
                            <td className="p-4">{booking.id}</td>
                            <td className={`border-4 border-white text-center ${booking.active ? "bg-green-500" : "bg-gray-200"}`}>
                                {booking.active ? "aktiv" : "ej aktiv"}
                            </td>
                            <td className="p-4">{booking.carName} {booking.carModel}</td>
                            <td className="p-4">{booking.fromDate}</td>
                            <td className="p-4">{booking.toDate}</td>
                        </tr>
                    ))}
                </Table>
            )}
        </div>
    );
}
