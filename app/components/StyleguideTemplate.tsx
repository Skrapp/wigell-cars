import Image from 'next/image';
import CodeBlock from './CodeBlock';

type CodeBlock = {
    language: string,
    code: string
};

type StyleguideProps = {
    title: string, 
    description: string,
    img: string, 
    imgAlt:string,
    codeBlocks: CodeBlock[]
};

export default function StyleguideTemplate({
    title, 
    description,
    img,
    imgAlt,
    codeBlocks,
}: StyleguideProps){
    return(
        <div>
            <h1>{title}</h1>
            <Image 
                src={img} 
                alt={imgAlt} 
                width={500}
                height={500}
            />
            <p>{description}</p>
            {codeBlocks.map((block) => (
                <CodeBlock 
                key={block.language} 
                language={block.language} 
                code={block.code} 
                />
            ))}
        </div>
    );
}