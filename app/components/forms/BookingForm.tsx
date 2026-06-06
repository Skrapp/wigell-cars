"use client";

import { useState } from "react";
import FormField from "./FormField";
import Button from "../Button";
import type { User } from "@/lib/api";

type BookingFormProps = {
    user:User;
    carId:number;
    className?:string;
}

export default function BookingForm({
    user,
    carId,
    className
}:BookingFormProps) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        const booking = {
            usesrId: user.userId,
            carId,
            startDate,
            endDate,
        };

        console.log(booking);

        // Här kommer API-anrop senare
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="
                flex
                flex-col
                gap-4
                max-w-md
            "
        >
            <p>Bil bokas för inloggad användare: {user.username}</p>

            <FormField
                label="Bil ID"
                name="carId"
                value={carId.toString()}
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

            <Button type="submit">Boka</Button>
        </form>
    );
}