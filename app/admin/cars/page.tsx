import { getCars } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import PageTitle from "@/app/components/headings/PageTitle";
import Button from "@/app/components/Button";
import CarTable from "@/app/components/tables/CarTable";
import PageShell from "@/app/components/PageShell";

export default async function AdminCarsPage() {
    const user = await getUser();

    if (!user || !user.isAdmin) {
        redirect("/login");
    }

    const cars = await getCars();

    return (
        <PageShell title="Adminpanelen - Bilar" actions={<Button href="/admin/cars/new-car">Ny bil</Button>}>
            <CarTable initialCars={cars} credentials={user.credentials} />
        </PageShell>
    );
}
