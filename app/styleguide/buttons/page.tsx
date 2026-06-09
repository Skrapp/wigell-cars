import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import Button from "@/app/components/Button";

export default function ButtonPage() {
    return (
            <StyleguideTemplate
                title="Knappar"
                description="Knappar används för olika actions och navigering i appen. Variant, type och action väljs utifrån betydelsen av handlingen."
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: 
`<Button
    onClick={handleClick}
    href="/link"
    type="button"
    variant="warning"
    disabled
>
    Klicka här
</Button>`
                    }
                ]}

                exampel={
                <div className="flex flex-row gap-4">
                    <Button variant="standard">Standard</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="icon">i</Button>
                    <Button disabled>Disabled</Button>
                </div>}

                explanations={[
                    {
                        label: "onClick",
                        description: "Funktion när användaren trycker på knappen. Kan ej köras tillsammans med href."
                    },
                    {
                        label: "href",
                        description: "Url som knappen ska länka till. Kan ej köras tillsammans med onClick"
                    },
                    {
                        label: "type",
                        description: `"button" | "submit" | "reset" Vilken typ av knapp det ska vara, ändrar beteende. Default är "button"`
                    },
                    {
                        label: "variant",
                        description: `"destructive" | "warning" | "icon" |"standard" Vilken variant av knapp, ändrar styling. Default är standard`
                    },
                    {
                        label: "disabled",
                        description: `Om knappen ska vara inaktiv och ej klickbar. Ändrar styling och beteende. Default är disabled inaktiverat`
                    }
                ]}
            />
    );
}