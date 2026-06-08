import type { Car } from "@/lib/types";
import Card from "./Card";
import Button from "./Button";

type CarProps = {
    car:Car;
}

export default function CarCard({car}:CarProps){
    
    return(
        <Card 
        img={car.imageSrc ? car.imageSrc : "imgs/cars/placeholder.jpg"} 
        imgAlt={car.imageSrc ? `Bild av ${car.name} ${car.model}` : "Ingen nuvarande bild av bilen"}>
            <h3 className="text-xl font-semibold">{car.name} {car.model}</h3>
            <p className="text-sm text-gray-600">{car.type}</p>
            <p className="text-gray-600">{car.price} kr/dag</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>{car.feature1}</li>
                <li>{car.feature2}</li>
                <li>{car.feature3}</li>
            </ul>
            <Button href={`/booking?carId=${car.id}`}>Boka</Button>
            </Card>
    )
}