import Image from 'next/image';
import CodeBlock from './CodeBlock';
import PageTitle from './headings/PageTitle';
import Panel from './Panel';
import SectionTitle from './headings/SectionTitle';

type CodeBlock = {
    language: string;
    code: string;
};

type StyleguideProps = {
    title: string;
    description: string;
    img: string;
    imgAlt:string;
    codeBlocks: CodeBlock[];
};

export default function StyleguideTemplate({
    title, 
    description,
    img,
    imgAlt,
    codeBlocks,
}: StyleguideProps){
    return(
        <span>
            <PageTitle>{title}</PageTitle>
            <Image 
                src={img} 
                alt={imgAlt} 
                width={500}
                height={500}
            />
            <p>{description}</p>
            <Panel className='flex flex-col gap-4 w-full'>
                <SectionTitle>Kod</SectionTitle>
            {codeBlocks.map((block) => (
                <CodeBlock 
                key={block.language} 
                language={block.language} 
                code={block.code} 
                />
            ))}
            </Panel>
        </span>
    );
}