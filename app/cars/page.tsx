import { getCars } from "@/lib/api";
import CarList from "../components/CarList";
import PageTitle from "../components/headings/PageTitle";

export default async function CarsPage() {
    const cars = await getCars();

    return (
        <div className="boxed-content m-10">
            <PageTitle>Alla bilar</PageTitle>
            <CarList initialCars={cars} />
        </div>
    );
}