import { getCarById } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import PageTitle from "@/app/components/headings/PageTitle";
import Card from "@/app/components/Card";
import Button from "@/app/components/Button";
import EditCarForm from "@/app/components/forms/EditCarForm";

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
        <div className="boxed-content flex flex-col gap-4">
            <PageTitle>Redigera bil: {car.name}</PageTitle>
            <Card className="p-4">
                <EditCarForm car={car} credentials={user.credentials} />
                <div className="mt-6">
                    <Button href="/admin/cars">Tillbaka till bilar</Button>
                </div>
            </Card>
        </div>
    );
}
