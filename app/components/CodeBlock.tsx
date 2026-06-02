"use client";

import { useState } from "react";
import Button from "./Button";
import CardTitle from "./headings/CardTitle";

type CodeBlockProps = {
    language: string,
    code: string
};

export default function CodeBlock({
    language,
    code
}:CodeBlockProps){
    const [copied, setCopied] = useState(false);

    function copyCode(){
        navigator.clipboard.writeText(code);
        console.log('Kopierad kod:', code);
        setCopied(true);
        // Dölj bekräftelsen efter 2 sekunder
        setTimeout(()=> setCopied(false), 2000);
    }
    return(
        <div className="flex flex-col flex-wrap gap-2 items-start
        bg-background border-button-border border-2
        p-4">
            <CardTitle>{language}</CardTitle>
                <pre className="p-4 
                bg-silver border-2 border-button-border rounded-md
                w-full overflow-x-auto">
                    <code>{code}</code>
                </pre>
            <Button onClick={copyCode}>
                Kopiera kod
            </Button>
            {copied && (
                <p className="text-sm text-green-600">kod kopierad</p>
            )}
        </div>
    )
}