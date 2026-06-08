"use client";

import { useState } from "react";
import { createCar, uploadCarImage } from "@/lib/api";
import { NewCar } from "@/lib/types";
import Button from "../Button";
import FormField from "./FormField";

type NewCarFormProps = {
    credentials: string;
};

export default function NewCarForm({ credentials }: NewCarFormProps) {
    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [typeValue, setTypeValue] = useState("");
    const [price, setPrice] = useState("");
    const [feature1, setFeature1] = useState("");
    const [feature2, setFeature2] = useState("");
    const [feature3, setFeature3] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatusMessage(null);
        setIsSaving(true);

        let imageSrc = "/imgs/cars/placeholder.jpg";

        if (imageFile) {
            const uploaded = await uploadCarImage(imageFile);
            if (!uploaded) {
                setStatusMessage("Kunde inte ladda upp bilden.");
                setIsSaving(false);
                return;
            }
            imageSrc = uploaded;
            console.log(imageSrc);
        }

        const newCar: NewCar = {
            name,
            model,
            type: typeValue,
            price: Number(price) || 0,
            feature1,
            feature2,
            feature3,
            imageSrc,
        };

        const response = await createCar(newCar, credentials);

        if (response?.ok) {
            setStatusMessage("Bilen har skapats.");
            setName("");
            setModel("");
            setTypeValue("");
            setPrice("");
            setImageFile(null);
        } else {
            setStatusMessage("Kunde inte skapa bilen.");
        }

        setIsSaving(false);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <FormField
                label="Namn"
                name="name"
                value={name}
                onChange={setName}
                required
            />
            <FormField
                label="Modell"
                name="model"
                value={model}
                onChange={setModel}
                required
            />
            <FormField
                label="Typ"
                name="type"
                value={typeValue}
                onChange={setTypeValue}
                required
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                    label="Feature 1"
                    name="feature1"
                    value={feature1}
                    onChange={setFeature1}
                />
                <FormField
                    label="Feature 2"
                    name="feature2"
                    value={feature2}
                    onChange={setFeature2}
                />
                <FormField
                    label="Feature 3"
                    name="feature3"
                    value={feature3}
                    onChange={setFeature3}
                />
            </div>
            <FormField
                label="Pris per dag"
                name="price"
                type="number"
                value={price}
                onChange={setPrice}
                required
            />
            <div className="flex flex-col gap-2">
                <label htmlFor="image">Bilbild</label>
                <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={(event) => setImageFile(event.target.files?.[0] ?? null)}
                    className="border border-button-border rounded-md p-2"
                />
            </div>
            <Button type="submit" disabled={isSaving}>
                {isSaving ? "Sparar..." : "Skapa bil"}
            </Button>
            {statusMessage ? (
                <p className="text-sm text-gray-700">{statusMessage}</p>
            ) : null}
        </form>
    );
}
