import Image from 'next/image';
import CodeBlock from './CodeBlock';
import PageTitle from './headings/PageTitle';
import SectionTitle from './headings/SectionTitle';
import PanelCard from './PanelCard';
import Panel from './Panel';
import PageShell from './PageShell';
import Button from './Button';

type CodeBlock = {
    language: string;
    code: string;
};

type Explanation = {
    label:string;
    description:string;
}

type StyleguideProps = {
    exampel: React.ReactNode;
    title: string;
    description: string;
    codeBlocks: CodeBlock[];
    explanations:Explanation[];
};

export default function StyleguideTemplate({
    title, 
    description,
    codeBlocks,
    explanations,
    exampel,
}: StyleguideProps){
    return(
        <PageShell title={title} actions={<Button href='/styleguide'>Tillbaka</Button>}>
            <p className='mb-4'>{description}</p>
            {exampel}            
            <Panel className='w-full flex flex-col gap-3'>
                <SectionTitle>{title}</SectionTitle>
                {codeBlocks.map((block) => (
                    <CodeBlock 
                    key={block.language} 
                    language={block.language} 
                    code={block.code} 
                    />
                ))}
            </Panel>
            <Panel className='gap-4'>
                <dl className="grid gap-3">
                    {explanations.map((ex) => (
                        <div key={ex.label}>
                            <dt className="font-semibold">{ex.label}</dt>
                            <dd>{ex.description}</dd>
                        </div>))
                    }
            
                </dl>
            </Panel>
        </PageShell>
    );
}