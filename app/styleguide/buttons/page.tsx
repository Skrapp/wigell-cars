import StyleguideTemplate from "@/app/components/StyleguideTemplate";

export default function ButtonPage(){
    return (
        <StyleguideTemplate 
        title="Knappar" 
        description="Knappar används för olika grejer."
        img="/globe.svg"
        imgAlt="En glob"
        codeBlocks={[
            {
                language:"TypeScript",
                code: `<button className="transparent-20">Knapptext</button>`
            },
            {
                language:"CSS",
                code: `button{
    border: 1px solid #fff;
}`
            }
        ]} />
    )
}