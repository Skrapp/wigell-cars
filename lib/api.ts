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

export async function login(username:string, password:string){
    const response = await fetch(`${baseUrl}/api/v1/auth/login`,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({username,password}),
    });
    
    if (!response.ok) throw new Error("Login failed");
    return response.json(); // returns { isAdmin, userId, username }
}