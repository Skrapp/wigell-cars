import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import Card from "@/app/components/Card";
import CardTitle from "@/app/components/headings/CardTitle";
import SectionTitle from "@/app/components/headings/SectionTitle";
import Button from "@/app/components/Button";
import Panel from "@/app/components/Panel";

export default function CardsPage() {
    return (
        <div className="space-y-8">
            <StyleguideTemplate
                title="Cards"
                description="Kortkomponenter används för att presentera innehåll i sammanhängande block med bild, text och åtgärder."
                img="/imgs/cars/placeholder.jpg"
                imgAlt="Placeholderbild för kortkomponenter"
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: `<Card img="/imgs/cars/placeholder.jpg" imgAlt="Bilbild">
    <CardTitle>Rubrik</CardTitle>
    <p>Text som beskriver kortets innehåll.</p>
    <Button href="/cars">Visa</Button>
</Card>`
                    }
                ]}
            />
            <SectionTitle>Exempel</SectionTitle>
            <Panel className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card img="/imgs/cars/placeholder.jpg" imgAlt="Placeholderbild för bilkort">
                    <CardTitle>Förhandsvisning</CardTitle>
                    <p>En standardkort-komponent som används i billistningar.</p>
                    <Button href="/cars">Se bilen</Button>
                </Card>
                <Card>
                    <CardTitle>Enkelt kort</CardTitle>
                    <p>Kort kan också visas utan bild, till exempel i administrativa vyer.</p>
                    <Button href="/admin" variant="warning">Gå till admin</Button>
                </Card>
            </Panel>
        </div>
    );
}
