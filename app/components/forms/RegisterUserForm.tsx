"use client";

import { useState } from "react";
import FormField from "./FormField";
import Button from "../Button";
import { NewUser } from "@/lib/types";
import { registerUser } from "@/lib/api";

type RegisterUserFormProps = {
    className?: string;
};

export default function RegisterUserForm({ className = "" }: RegisterUserFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [messageColor, setMessageColor] = useState("text-green-600");
    const [isSaving, setIsSaving] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setIsSaving(true);
        setSuccessMessage(null);

        const newUser: NewUser = {
            firstName,
            lastName,
            username,
            phone,
            email,
            password,
        };

        const response = await registerUser(newUser);

        if (response?.ok) {
            setMessageColor("text-green-600");
            setSuccessMessage("Användaren har registrerats.");
            setFirstName("");
            setLastName("");
            setUsername("");
            setPhone("");
            setEmail("");
            setPassword("");
        } else {
            setMessageColor("text-red-600");
            setSuccessMessage("Kunde inte registrera användaren. Kontrollera uppgifterna och försök igen.");
        }

        setIsSaving(false);

        //TODO Gå till start
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 max-w-lg ${className}`}
        >
            <FormField
                label="Förnamn"
                name="firstName"
                value={firstName}
                onChange={setFirstName}
                required
            />
            <FormField
                label="Efternamn"
                name="lastName"
                value={lastName}
                onChange={setLastName}
                required
            />
            <FormField
                label="Användarnamn"
                name="username"
                value={username}
                onChange={setUsername}
                required
            />
            <FormField
                label="Telefon"
                name="phone"
                value={phone}
                onChange={setPhone}
                required
            />
            <FormField
                label="E-post"
                name="email"
                type="email"
                value={email}
                onChange={setEmail}
                required
            />
            <FormField
                label="Lösenord"
                name="password"
                type="password"
                value={password}
                onChange={setPassword}
                required
            />
            <Button type="submit" disabled={isSaving}>
                {isSaving ? "Sparar..." : "Registrera användare"}
            </Button>
            {successMessage ? (
                <p className={`${messageColor} text-sm`}>{successMessage}</p>
            ) : null}
        </form>
    );
}
