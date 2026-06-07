import { Car, User } from "./types";
const baseUrl = `http://localhost:8080`;



export async function getCars(): Promise<Car[]> {
    try{
    const response = await fetch(`${baseUrl}/api/v1/cars`);

        if(!response.ok){
            throw new Error("Fetch failed");
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.log("Gick inte att hämta bilar från databas: ", error);
        return [];
    }
}

export async function getCarById(
    carId:number, 
    credentials:string
): Promise<Car | null> {
    try{
        const response = await fetch(`${baseUrl}/api/v1/cars/${carId}`, {
            headers:{
                "Authorization": `Basic ${credentials}`
            }
        });

        if(!response.ok){
            throw new Error("Fetch failed:"+ response.status + response.statusText);
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.log(`Gick inte att hämta bil med id ${carId} från databas: `, error);
        return null;
    }    
}

export async function login(
    username:string, 
    password:string
):Promise<User> {
    const response = await fetch(`${baseUrl}/api/v1/auth/login`, {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({username, password}),
    });
    
    if (!response.ok) throw new Error("Login failed");
    
    return response.json(); 
}

