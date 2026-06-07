"use client";

import { useState } from "react";
import FormField from "./FormField";
import Button from "../Button";
import type { Booking, Car, User } from "@/lib/types";
import Link from "next/link";
import { bookCar } from "@/lib/api";

type BookingFormProps = {
    user:User;
    car:Car;
    className?:string;
}

export default function BookingForm({
    user,
    car,
    className
}:BookingFormProps) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        const newBooking:Booking = {
            userId: user.userId,
            carId: car.id,
            fromDate: startDate,
            toDate: endDate,
        };

        console.log(newBooking);

        // Här kommer API-anrop senare
        const response = bookCar(newBooking, user.credentials); 

        console.log(response);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 max-w-md ${className}`}>

            <p>Bil bokas för inloggad användare: {user.username}</p>

            <FormField
                label="Bil ID"
                name="carId"
                value={car.id.toString()}
                onChange={()=>{}}
                disabled
            />

            <FormField
                label="Startdatum"
                name="startDate"
                type="date"
                value={startDate}
                onChange={setStartDate}
            />

            <FormField
                label="Slutdatum"
                name="endDate"
                type="date"
                value={endDate}
                onChange={setEndDate}
            />

            {/* TODO add totalprice */}

            <Button type="submit">Boka</Button>
        </form>
    );
}