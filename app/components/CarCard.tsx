import type { Car } from "@/lib/api";
import Image from "next/image";
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
                <p className="text-gray-600">{car.price} kr/dag</p>
                <Button href="/booking">Boka</Button>
              </Card>
        )
}