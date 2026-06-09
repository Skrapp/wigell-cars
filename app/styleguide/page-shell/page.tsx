import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import Panel from "@/app/components/Panel";
import PageShell from "@/app/components/PageShell";
import Button from "@/app/components/Button";

export default function PageShellPage() {
    return (
        <div className="space-y-8">
            <StyleguideTemplate
                title="PageShell"
                description="Wrapper-komponent för att strukturera sidinnehål med konsistent styling och layout."
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: `import PageShell from "@/app/components/PageShell";

<PageShell titel="Sidans titel subTite="subtitle" action={<Button href="/url">Ev. aktion</Button>}>
    <p>Innehåll</p>
</PageShell>`
                    }
                ]}
                exampel={
                    <Panel className="flex flex-col gap-6 w-full">
                        <div>
                            <p className="text-sm text-gray-600 mb-2">PageShell-struktur</p>
                            <PageShell title="Page Titel" subtitle="subtitel" actions={<Button >Tillbaka</Button>}>
                                <div>
                                    <p>PageShell är en wrapper som används på de flesta sidor för att få en liknande känsla.</p>
                                </div>
                            </PageShell>
                        </div>
                    </Panel>
                }
                explanations={[
                    {
                        label: "PageShell",
                        description: "Wrapper-komponent för sidinnehål. Accepterar children som React.ReactNode. Tillämpar konsistent styling och layout-regler på innehållet."
                    },
                    {
                        label: "titel",
                        description: "Titel på sidan, blir en PageTitle. Inte ett krav."
                    },
                    {
                        label: "subTitel",
                        description: "En subtitel som kan beskriva lite mer om sidan. Inte ett krav."
                    },
                    {
                        label: "action",
                        description: "Möjlighet att lägga till en aktions knapp, så som en call to action eller tillbakaknapp. Inte ett krav."
                    }
                ]}
            />
        </div>
    );
}
