import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import Panel from "@/app/components/Panel";
import CarCard from "@/app/components/CarCard";
import { Car } from "@/lib/types";

export default function CarComponentsPage() {
    const car:Car = {
        id: 12,
        model: "Volvo",
        name: "V40",
        type: "Bensin",
        price: 1200,
        booked: false,
        imageSrc: "/imgs/cars/placeholder.jpg",    
        feature1: "Bilbälten",
        feature2: "En riktig klassiker",
        feature3: "",
    }
    return (
        <div className="space-y-8">
            <StyleguideTemplate
                title="Bilkomponenter"
                description="Komponenter specifikt för bilvisning och blistrering."
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: 
`<CarCard car={car} />
<CarList initialCars={cars} />`
                    }
                ]}
                exampel={
                    <Panel className="flex flex-col gap-6 w-full">
                        <CarCard car={car} />
                    </Panel>
                }
                explanations={[
                    {
                        label: "CarCard",
                        description: "Visar en enskild bil i kortformat. Accepterar Car-objekt och renderar bilens bild, namn, modell, typ, pris, egenskaper och bokningsknapp."
                    },
                    {
                        label: "CarList",
                        description: "Client-komponent som visar lista av bilar med sortering och filtrering. Accepterar initialCars-array och möjliggör sortering efter namn och typ."
                    }
                ]}
            />
        </div>
    );
}
