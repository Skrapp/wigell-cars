"use client";

import { useState } from "react";
import FormField from "./FormField";
import Button from "../Button";
import type { User } from "@/lib/types";
import { updateUser } from "@/lib/api";

type EditUserFormProps = {
    user: User;
    credentials: string;
    className?: string;
};

export default function EditUserForm({
    user,
    credentials,
    className,
}: EditUserFormProps) {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [username, setUsername] = useState(user.username);
    const [phone, setPhone] = useState(user.phone);
    const [email, setEmail] = useState(user.email);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [successMessageColor, setSuccessMessageColor] = useState("text-green-600");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        const id = user.id; 
        const role = user.role;
        const noOfOrders = user.noOfOrders;

        const updatedUser: User = {
            id,
            firstName,
            lastName,
            username,
            phone,
            email,
            noOfOrders,
            role,
        };

        const response = await updateUser(updatedUser, credentials);

        if (response?.ok) {
            setSuccessMessageColor("text-green-600");
            setSuccessMessage("Användaren uppdaterades.");
        } else {
            setSuccessMessageColor("text-red-600");
            setSuccessMessage("Kunde inte uppdatera användaren.");
        }

        setIsLoading(false);
    }

    

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col gap-4 max-w-md ${className}`}>
            <p>Redigera användare: {user.username}</p>
            <p>Roll: {user.role}</p>

            <FormField
                label="Förnamn"
                name="firstName"
                value={firstName}
                onChange={setFirstName}
                disabled={isLoading}
            />

            <FormField
                label="Efternamn"
                name="lastName"
                value={lastName}
                onChange={setLastName}
                disabled={isLoading}
            />

            <FormField
                label="Telefon"
                name="phone"
                type="tel"
                value={phone}
                onChange={setPhone}
                disabled={isLoading}
            />

            <FormField
                label="E-post"
                name="email"
                type="email"
                value={email}
                onChange={setEmail}
                disabled={isLoading}
            />

            

            <Button type="submit" disabled={isLoading}>
                Uppdatera användare
            </Button>

            {successMessage ? <p className={successMessageColor}>{successMessage}</p> : null}
        </form>
    );
}
