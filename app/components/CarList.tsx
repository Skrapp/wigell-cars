"use client";

import { useMemo, useState } from "react";
import type { Car } from "@/lib/types";
import CarCard from "./CarCard";
import Button from "./Button";

type SortKey = "name" | "type";

type CarListProps = {
    initialCars: Car[];
};

export default function CarList({ initialCars }: CarListProps) {
    const [sortField, setSortField] = useState<"name" | "type">("name");
    const [orderAsc, setOrderAsc] = useState(true);
    const [cars, setCars] = useState(initialCars);

    // const user = await getUser();
    // const isAdmin = user?.isAdmin;

    function sortCars() {

        setCars(
            //Själva sorteringen
            [...cars].sort((car1, car2) => {

                const comparison =
                    car1[sortField].localeCompare(
                        car2[sortField]
                    );

                return orderAsc
                    ? comparison
                    : -comparison;
            })
        );
    }

    function handleSort(key: SortKey) {
        if (sortField === key) {
            setOrderAsc(!orderAsc);
        } else {
            setSortField(key);
            setOrderAsc(true);
        }
        sortCars()
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="font-semibold">Sortera på:</span>
                <Button
                    type="button"
                    onClick={() => handleSort("name")}
                    variant={sortField === "name" ? "warning" : "standard"}
                >
                    Namn {sortField === "name" ? (orderAsc ? "↑" : "↓") : ""}
                </Button>
                <Button
                    type="button"
                    onClick={() => handleSort("type")}
                    variant={sortField === "type" ? "warning" : "standard"}
                >
                    Typ {sortField === "type" ? (orderAsc ? "↑" : "↓") : ""}
                </Button>
            </div>
            <div className="flex flex-row flex-wrap gap-10">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
}
