export type Car = {
    id: number;
    model: string;
    name: string;
    type: string;
    price: number;
    booked: boolean;
    imageSrc: string;

};

const baseUrl = `http://localhost:8080`;

export async function getCars(): Promise<Car[]> {
    console.log("Inne i getCars");
    try{
    const response = await fetch(`${baseUrl}/api/v1/cars`);

        if(!response.ok){
            console.log("error");
            throw new Error("Fetch failed");
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.log("Fel", error);
        return [];
    }
}