import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import Panel from "@/app/components/Panel";
import Navigation from "@/app/components/Navigation";

export default function NavigationPage() {
    const navigationPages = [
    { title: "Hem", href: "/" },
    { title: "Bilar", href: "/cars" },
    { title: "Mina bokningar", href: "/booking" }
];
    return (
        <div className="space-y-8">
            <StyleguideTemplate
                title="Navigation"
                description="Navigeringskomponent för att visa horisontell meny med länkar."
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: `
const navigationPages = [
    { title: "Hem", href: "/" },
    { title: "Bilar", href: "/cars" },
    { title: "Mina bokningar", href: "/booking" }
];

<Navigation pages={navigationPages} className="bg-gray-400"/>`
                    }
                ]}
                exampel={
                    <Panel className="flex flex-col gap-6 w-full">
                        <Navigation pages={navigationPages} className="bg-gray-300"/>`
                    </Panel>
                }
                explanations={[
                    {
                        label: "Navigation",
                        description: "Visar en horisontell navigeringsmeny. Accepterar pages-array med PageItem-objekt som innehåller title och href. Länkarna får hover-effekter (font-extrabold)."
                    },
                    {
                        label: "pages",
                        description: "Array av PageItem-objekt. Varje objekt måste innehålla title (visad text) och href (URL-länk)."
                    },
                    {
                        label: "className",
                        description: "Valfri CSS-klasser för wrapper-elementet. Används för att anpassa layout och spacing."
                    }
                ]}
            />
        </div>
    );
}
