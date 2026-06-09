import { getCarById } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import PageTitle from "@/app/components/headings/PageTitle";
import Button from "@/app/components/Button";
import EditCarForm from "@/app/components/forms/EditCarForm";
import PageShell from "@/app/components/PageShell";
import PanelCard from "@/app/components/PanelCard";

type CarPageProps = {
    params: Promise<{ carId: string }>;
};

export default async function CarPage({ params }: CarPageProps) {
    const user = await getUser();

    if (!user || !user.isAdmin) {
        redirect("/login");
    }

    const { carId } = await params;
    const id = Number(carId);

    if (Number.isNaN(id)) {
        return <p>Ogiltigt ID</p>;
    }

    const car = await getCarById(id, user.credentials);

    if (!car) {
        return <p>Finns ingen bil med id {id}</p>;
    }

    return (
        <PageShell title={`Redigera bil: ${car.name}`}>
            <PanelCard>
                <EditCarForm car={car} credentials={user.credentials} />
                <div className="mt-6">
                    <Button href="/admin/cars">Tillbaka till bilar</Button>
                </div>
            </PanelCard>
        </PageShell>
    );
}
