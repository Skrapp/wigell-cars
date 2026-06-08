import { getCars } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import PageTitle from "@/app/components/headings/PageTitle";
import Button from "@/app/components/Button";
import CarTable from "@/app/components/tables/CarTable";

export default async function AdminCarsPage() {
    const user = await getUser();

    if (!user || !user.isAdmin) {
        redirect("/login");
    }

    const cars = await getCars();

    return (
        <div className="boxed-content flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <PageTitle>Adminpanelen - Bilar</PageTitle>
                <Button href="/admin/cars/new-car">Ny bil</Button>
            </div>
            <CarTable initialCars={cars} credentials={user.credentials} />
        </div>
    );
}
