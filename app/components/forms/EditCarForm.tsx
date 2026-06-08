"use client";

import { useState } from "react";
import { uploadCarImage, updateCar } from "@/lib/api";
import { Car } from "@/lib/types";
import Button from "../Button";
import FormField from "./FormField";

type EditCarFormProps = {
    car: Car;
    credentials: string;
};

export default function EditCarForm({ car, credentials }: EditCarFormProps) {
    const [name, setName] = useState(car.name);
    const [model, setModel] = useState(car.model);
    const [typeValue, setTypeValue] = useState(car.type);
    const [price, setPrice] = useState(car.price.toString());
    const [feature1, setFeature1] = useState(car.feature1);
    const [feature2, setFeature2] = useState(car.feature2);
    const [feature3, setFeature3] = useState(car.feature3);
    const [imageSrc, setImageSrc] = useState(car.imageSrc);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatusMessage(null);
        setIsSaving(true);

        let updatedImageSrc = imageSrc;

        if (imageFile) {
            const uploaded = await uploadCarImage(imageFile);
            if (!uploaded) {
                setStatusMessage("Kunde inte ladda upp bilden.");
                setIsSaving(false);
                return;
            }
            updatedImageSrc = uploaded;
            setImageSrc(uploaded);
        }

        const updatedCar: Car = {
            id:car.id,
            booked:car.booked,
            name,
            model,
            type: typeValue,
            price: Number(price) || 0,
            feature1,
            feature2,
            feature3,
            imageSrc: updatedImageSrc,
        };

        console.log(updatedCar);

        const response = await updateCar(updatedCar, credentials);

        if (response?.ok) {
            setStatusMessage("Bilen har uppdaterats.");
        } else {
            setStatusMessage("Kunde inte uppdatera bilen.");
        }

        setIsSaving(false);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    label="Typ"
                    name="type"
                    value={typeValue}
                    onChange={setTypeValue}
                    required
                />
                <FormField
                    label="Pris per dag"
                    name="price"
                    type="number"
                    value={price}
                    onChange={setPrice}
                    required
                />
            </div>
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
            <div className="flex flex-col gap-2">
                <p className="font-medium">Nuvarande bild</p>
                <img
                    src={imageSrc || "/imgs/cars/placeholder.jpg"}
                    alt={`Bild på ${car.name}`}
                    className="w-full max-h-60 object-cover rounded-md"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="image">Byt bild</label>
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(event) => setImageFile(event.target.files?.[0] ?? null)}
                    className="border border-button-border rounded-md p-2"
                />
            </div>
            <Button type="submit" disabled={isSaving}>
                {isSaving ? "Sparar..." : "Spara ändringar"}
            </Button>
            {statusMessage ? (
                <p className="text-sm text-gray-700">{statusMessage}</p>
            ) : null}
        </form>
    );
}
