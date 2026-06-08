"use client";

import { useState } from "react";
import { Car } from "@/lib/types";
import Table from "./Table";
import Button from "../Button";
import { deleteCar } from "@/lib/api";

type CarTableProps = {
    initialCars: Car[];
    credentials: string;
};

export default function CarTable({ initialCars, credentials }: CarTableProps) {
    const [cars, setCars] = useState(initialCars);

    async function handleDelete(carId: number) {
        if (!confirm(`Radera bil med id ${carId}?`)) {
            return;
        }
        const success = await deleteCar(carId, credentials);
        if (!success) {
            alert(`Kunde inte radera bilen ${carId}.`);
            return;
        }
        setCars(cars.filter((car) => car.id !== carId));
    }

    return (
        <div className="flex flex-col w-full overflow-auto bg-white shadow-md rounded-lg p-4">
            {cars.length === 0 ? (
                <p className="text-center">Inga bilar hittade</p>
            ) : (
                <Table
                    headers={[
                        "ID",
                        "Namn",
                        "Modell",
                        "Typ",
                        "Pris",
                        "Feature 1",
                        "Feature 2",
                        "Feature 3",
                        "Bokad",
                        "Bild",
                        "Redigera",
                        "Radera",
                    ]}
                >
                    {cars.map((car) => (
                        <tr key={car.id} className="hover:bg-gray-100">
                            <td className="p-4">{car.id}</td>
                            <td className="p-4">{car.name}</td>
                            <td className="p-4">{car.model}</td>
                            <td className="p-4">{car.type}</td>
                            <td className="p-4">{car.price} kr</td>
                            <td className="p-4">{car.feature1}</td>
                            <td className="p-4">{car.feature2}</td>
                            <td className="p-4">{car.feature3}</td>
                            <td className="p-4">{car.booked ? "Ja" : "Nej"}</td>
                            <td className="p-4">
                                <img
                                    src={car.imageSrc || "/imgs/cars/placeholder.jpg"}
                                    alt={`Bild av ${car.name}`}
                                    className="w-24 h-16 object-cover rounded"
                                />
                            </td>
                            <td className="p-4">
                                <Button href={`/admin/cars/${car.id}`}>Redigera</Button>
                            </td>
                            <td className="p-4">
                                <Button onClick={() => handleDelete(car.id)} variant="destructive">
                                    Radera
                                </Button>
                            </td>
                        </tr>
                    ))}
                </Table>
            )}
        </div>
    );
}
