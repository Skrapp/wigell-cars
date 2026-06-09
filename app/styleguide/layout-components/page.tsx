import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import Panel from "@/app/components/Panel";
import PanelCard from "@/app/components/PanelCard";
import CodeBlock from "@/app/components/CodeBlock";
import Button from "@/app/components/Button";

export default function LayoutComponentsPage() {
    return (
        <div className="space-y-8">
            <StyleguideTemplate
                title="Layoutkomponenter"
                description="Komponenter för att strukturera och organisera sidans layout. Dessa hjälper till att bygga konsistenta layouter."
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: 
`<Panel>
   Innehåll här
</Panel>

<PanelCard
    title="Rubrik"
    description="Beskrivning"
    actions={<Button href="/url">Aktionknapp eller annat</Button>}
>
    Innehåll här
</PanelCard>`
                    },
                    {
                        language: "TypeScript",
                        code: 
`<CodeBlock
    language="TypeScript"
    code={\`const example = "kod";\`}
/>`
                    }
                ]}
                exampel={
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-gray-600 mb-2">Panel - Flexibel behållare</p>
                            <Panel className="gap-6 flex-col">
                                <div className="bg-gray-100 p-4 rounded">Panel-innehåll</div>
                                <div className="bg-gray-100 p-4 rounded">Fler element</div>
                            </Panel>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-2">PanelCard - Kort med rubrik och åtgärder</p>
                            <PanelCard
                                title="Exempelkort"
                                description="Detta är en PanelCard-komponent med rubrik och beskrivning"
                                actions={<Button variant="standard">Åtgärd</Button>}
                            >
                                <p>Kortets huvudinnehål visas här. PanelCard är perfekt för att presentera information med åtgärder.</p>
                            </PanelCard>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-2">CodeBlock - Kodvisare med kopieringsknapp</p>
                            <CodeBlock 
                                language="TypeScript"
                                code={`const greeting = "Hej världen";\nconsole.log(greeting);`}
                            />
                        </div>
                    </div>
                }
                explanations={[
                    {
                        label: "Panel",
                        description: "Flexibel behållare-komponent med flex layout. Accepterar children och valfri className. Har vit bakgrund, padding, rounded corners och skugga. Använd className för att anapassa ytterligare."
                    },
                    {
                        label: "PanelCard",
                        description: "Behållare med valfri rubrik, beskrivning samt åtgärds element. Använd className för att anapassa ytterligare."
                    },
                    {
                        label: "CodeBlock",
                        description: "Visar kodblock med syntax-highlighting och en kopieringsknapp. Accepterar language och code-string. Används för kodexempel i dokumentation."
                    }
                ]}
            />
        </div>
    );
}
