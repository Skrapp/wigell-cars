import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import PageTitle from "@/app/components/headings/PageTitle";
import Card from "@/app/components/Card";
import Button from "@/app/components/Button";
import NewCarForm from "@/app/components/forms/NewCarForm";

export default async function NewCarPage() {
    const user = await getUser();

    if (!user || !user.isAdmin) {
        redirect("/login");
    }

    return (
        <div className="boxed-content flex flex-col gap-4">
            <PageTitle>Skapa ny bil</PageTitle>
            <Card className="p-4">
                <NewCarForm credentials={user.credentials} />
                <div className="mt-6">
                    <Button href="/admin/cars">Tillbaka till bilar</Button>
                </div>
            </Card>
        </div>
    );
}
