'use client';

type CodeBlockProps = {
    language: string,
    code: string
};

export default function CodeBlock({
    language,
    code
}:CodeBlockProps){
    function copyCode(){
        navigator.clipboard.writeText(code);

        // Ta bort tidigare konfirmationer av kopieringar
        // const earlierConfirmations = document.querySelectorAll(".btn-confirmation");
        // for(let earlier of earlierConfirmations){
        //     earlier.remove();
        // }

        // Lägger till en konfirmering av kopiering av kod
        // const copyConfirmedElement = document.createElement('p');
        // copyConfirmedElement.classList.add('btn-confirmation');
        // copyConfirmedElement.innerText = 'Kod kopierad';
        // codeBlock.appendChild(copyConfirmedElement);
        console.log('Kopierad kod:', code);
        return;
    }
    return(
        <div className="code-block">
            <h3>{language}</h3>
            <pre>
                <code>{code}</code>
            </pre>
            <button onClick={copyCode} style={{ border: 'solid 2px #fff' }}>Kopiera kod</button>
        </div>
    )
}