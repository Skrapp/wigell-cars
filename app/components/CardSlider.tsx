import Card from "./Card";

type SliderProps = {
    cards: React.ReactNode[];
    cardsPerPage: number;
    includeDescription?: boolean;
    className?: string;
};

export default function CardSlider({
    cards,
    cardsPerPage,
    includeDescription = false,
    className
}: SliderProps){
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    const pages = [];
    
    for(let i = 0; i < totalPages; i++){
        pages.push(cards.slice(i * cardsPerPage, (i + 1) * cardsPerPage));
    }

    return(
        <div className={`${className}`}>
            
        </div>
    );
}