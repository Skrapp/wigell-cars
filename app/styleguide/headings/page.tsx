import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import CardTitle from "@/app/components/headings/CardTitle";
import PageTitle from "@/app/components/headings/PageTitle";
import SectionTitle from "@/app/components/headings/SectionTitle";
import Panel from "@/app/components/Panel";

export default function HeadingsPage() {
    return (
        <div className="space-y-8">
            <StyleguideTemplate
                title="Rubriker"
                description="Rubrikkomponenter används för att strukturera innehåll i hierarkiska nivåer. Varje rubriktyp har en specifik styling och användningsområde."
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: 
`<PageTitle>Sidtitel</PageTitle>
<SectionTitle>Avsnittitel</SectionTitle>
<CardTitle>Korttitel</CardTitle>`
                    }
                ]}
                exampel={
                    <Panel className="flex flex-col gap-6">
                        <div>
                            <p className="text-sm text-gray-600 mb-2">PageTitle (h1 - 4xl)</p>
                            <PageTitle>Det här är en PageTitle</PageTitle>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-2">SectionTitle (h2 - 2xl)</p>
                            <SectionTitle>Det här är en SectionTitle</SectionTitle>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-2">CardTitle (h3 - lg)</p>
                            <CardTitle>Det här är en CardTitle</CardTitle>
                        </div>
                    </Panel>
                }
                explanations={[
                    {
                        label: "PageTitle",
                        description: "Huvudrubrik för sidor. Använd för titeln längst upp på en sida. Renderas som h1 med className text-4xl font-bold."
                    },
                    {
                        label: "SectionTitle",
                        description: "Avsnittsrubrik för att dela upp innehåll. Använd för att skapa logiska sektioner inom en sida. Renderas som h2 med className text-2xl font-bold."
                    },
                    {
                        label: "CardTitle",
                        description: "Rubrik för kort och mindre komponenter. Använd inuti Card och liknande komponenter. Renderas som h3 med className text-lg font-semibold."
                    }
                ]}
            />
        </div>
    );
}
