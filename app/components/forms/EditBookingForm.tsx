"use client";

import { useState } from "react";
import FormField from "./FormField";
import Button from "../Button";
import type { UpdateBooking, Car, UserCookie, Booking, User } from "@/lib/types";
import { updateBooking } from "@/lib/api";

type BookingFormProps = {
    booking:Booking;
    owner:User|null;
    credentials:string;
    className?:string;
}

export default function EditBookingForm({
    booking,
    owner,
    credentials,
    className,
}:BookingFormProps) {
    const [startDate, setStartDate] = useState(booking.fromDate);
    const [endDate, setEndDate] = useState(booking.toDate);
    const [carId, setCarId] = useState<number>(booking.carId);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [successMessageColor, setSuccessMessageColor] = useState("text-green-600");
    const [isLoading, setIsLoading] = useState(false);


    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();
        setIsLoading(true);

        const updatedBooking: UpdateBooking = {
            id: booking.id,
            userId: null,
            carId: carId === booking.carId ? null : carId,
            fromDate: startDate === booking.fromDate ? null : startDate,
            toDate: endDate === booking.toDate ? null : endDate,
        };

        console.log(updatedBooking);

        const response = await updateBooking(updatedBooking, credentials);

        if (response?.ok) {
            setSuccessMessageColor("text-green-600");
            setSuccessMessage("Bokningen uppdaterades.");
        } else {
            setSuccessMessageColor("text-red-600");
            setSuccessMessage("Kunde inte uppdatera bokningen.");
        }

        setIsLoading(false);
    }

    //TODO add totalprice, info about car
    return (
        <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 max-w-md ${className}`}>

            <p>Bil bokad för användare: {owner?.firstName ?? "okänd" }</p>
            
            <FormField
                label="Bil ID"
                name="carId"
                type="number"
                value={carId.toString()}
                onChange={(value) => setCarId(Number(value))}
                disabled={isLoading}
            />

            <FormField
                label="Startdatum"
                name="startDate"
                type="date"
                value={startDate}
                onChange={setStartDate}
                disabled={isLoading}
            />

            <FormField
                label="Slutdatum"
                name="endDate"
                type="date"
                value={endDate}
                onChange={setEndDate}
                disabled={isLoading}
            />

            {/* TODO add totalprice */}

            <Button type="submit" disabled={isLoading}>Uppdatera</Button>

           {successMessage ? (
                <p className={successMessageColor}>{successMessage}</p>
            ) : null}
        </form>
    );
}