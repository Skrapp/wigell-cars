"use client";

import { useState } from "react";
import FormField from "./FormField";
import Button from "../Button";
import type { NewBooking, Car, UserCookie } from "@/lib/types";
import Link from "next/link";
import { bookCar } from "@/lib/api";
import { redirect } from "next/navigation";

type BookingFormProps = {
    user:UserCookie;
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
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [successMessageColor, setSuccessMessageColor] = useState("text-green-600")

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        const newBooking:NewBooking = {
            userId: user.userId,
            carId: car.id,
            fromDate: startDate,
            toDate: endDate,
        };

        const response = await bookCar(newBooking, user.credentials); 

        if (response?.ok) {
            setSuccessMessageColor("text-green-600");
            setSuccessMessage("Bokning skapad.");
        } else {
            setSuccessMessageColor("text-red-600");
            setSuccessMessage("Kunde inte skapa bokningen.");
        }
    }

    //TODO add totalprice, info about car
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

            {successMessage ? (
                <p className={successMessageColor}>{successMessage}</p>
            ) : null}
        </form>
    );
}