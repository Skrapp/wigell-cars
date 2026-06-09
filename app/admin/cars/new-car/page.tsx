import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import PageTitle from "@/app/components/headings/PageTitle";
import Button from "@/app/components/Button";
import NewCarForm from "@/app/components/forms/NewCarForm";
import PageShell from "@/app/components/PageShell";
import PanelCard from "@/app/components/PanelCard";

export default async function NewCarPage() {
    const user = await getUser();

    if (!user || !user.isAdmin) {
        redirect("/login");
    }

    return (
        <PageShell title="Skapa ny bil">
            <PanelCard>
                <NewCarForm credentials={user.credentials} />
                <div className="mt-6">
                    <Button href="/admin/cars">Tillbaka till bilar</Button>
                </div>
            </PanelCard>
        </PageShell>
    );
}
