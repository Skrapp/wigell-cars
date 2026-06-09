import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import Panel from "@/app/components/Panel";

export default function AdFooterPage() {
    return (
        <div className="space-y-8">
            <StyleguideTemplate
                title="AdFooter"
                description="Annonsfooter-komponent som visar annonser längst ned på sidan med möjlighet att stänga."
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: `import AdFooter from "@/app/components/AdFooter";

// Lägg till i root layout:
<AdFooter 
    href="/promotion" 
    imageSrc="/imgs/ads/summer-offer.jpg" 
/>`
                    }
                ]}
                exampel={
                    <Panel className="flex flex-col gap-6 w-full">
                        <div>
                            <p className="text-sm text-gray-600 mb-2">AdFooter - Fixed footer med annons</p>
                            <div className="bg-gray-50 border border-gray-200 rounded p-6">
                                <p className="text-gray-700">AdFooter är en client-komponent som visar en annons längst ned på sidan. Den har:</p>
                                <ul className="list-disc list-inside mt-3 text-sm text-gray-600 space-y-1">
                                    <li>Fixed position längst ned på skärmen</li>
                                    <li>Möjlighet för användaren att stänga annonsen</li>
                                    <li>Bild och länk till annonserat innehål</li>
                                    <li>Sparar closed-state i komponentens state</li>
                                </ul>
                            </div>
                        </div>
                    </Panel>
                }
                explanations={[
                    {
                        label: "AdFooter",
                        description: "Client-komponent för att visa annonser längst ned på sidan. Är fixed-positionerad och kan stängas av användaren."
                    },
                    {
                        label: "href",
                        description: "URL som annonsen ska länka till när klickad."
                    },
                    {
                        label: "imageSrc",
                        description: "Path till annonsbilden. Visas i en container med fixed höjd och responsiv bredd."
                    },
                    {
                        label: "Placement",
                        description: "Lägg till AdFooter i root layout-filen för att visas på alla sidor. Komponenten hanterar sin egen visibility-state."
                    }
                ]}
            />
        </div>
    );
}
