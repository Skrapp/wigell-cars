import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import Button from "@/app/components/Button";
import Panel from "@/app/components/Panel";

export default function ButtonPage() {
    return (
        <div className="space-y-8">
            <StyleguideTemplate
                title="Knappar"
                description="Knappar används för olika actions och navigering i appen. Välj variant utifrån betydelsen av handlingen."
                img="/imgs/cars/placeholder.jpg"
                imgAlt="Placeholderbild för knappguide"
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: `<Button
    onClick={handleClick}
    href="/link"
    type="button"
    variant="warning"
    disabled={false}
>
    Klicka här
</Button>`
                    }
                ]}
            />
            <Panel className="flex flex-wrap gap-4">
                <Button variant="standard">Standard</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="icon">i</Button>
                <Button disabled>Disabled</Button>
            </Panel>
        </div>
    );
}