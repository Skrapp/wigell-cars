import { Booking, Car, NewBooking, UpdateBooking, UserCookie, User } from "./types";
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

export async function getBookings(
    credentials:string
):Promise<Booking[]> {
    try{
        const response = await fetch(`${baseUrl}/api/v1/bookings`, {
            headers:{
                "Authorization": `Basic ${credentials}`
            }
        });

        if(!response.ok){
            throw new Error(`Fetch failed: ${response.status} ${response.body?.values}`)
        }
        const data = await response.json();
        return data;

    }catch(error){
        console.log("Kunde ej hämta bokningar: ", error);
        return [];
    }
}

export async function getBookingById(
    bookingId:number, 
    credentials:string
): Promise<Booking | null> {
    try{
        const response = await fetch(`${baseUrl}/api/v1/bookings/${bookingId}`, {
            headers:{
                "Authorization": `Basic ${credentials}`
            }
        });

        if(!response.ok){
            throw new Error(`Fetch failed: ${response.status} ${response.body?.values}`);
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.log(`Gick inte att hämta bokning med id ${bookingId} från databas: `, error);
        return null;
    }    
}

export async function bookCar(
    newBooking:NewBooking,
    credentials:string
){
    try{
        const response = await fetch(`${baseUrl}/api/v1/bookings`, {
            method:"POST",
            headers:{
                "Authorization": `Basic ${credentials}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newBooking),
        });

        if(!response.ok){
            throw new Error("Fetch failed:"+ response.status + response.statusText);
        }
        return response;
    }catch(error){
        console.log(`Gick inte att boka bilen: `, error);
        return null;
    }    
}

export async function updateBooking(
    booking:UpdateBooking,
    credentials:string
) {
    try{
        const response = await fetch(`${baseUrl}/api/v1/bookings/${booking.id}`, {
            method:"PUT",
            headers:{
                "Authorization": `Basic ${credentials}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify(booking),
        });

        if(!response.ok){
            throw new Error("Fetch failed:"+ response.status + response.statusText);
        }
        return response;
    }catch(error){
        console.log(`Gick inte att uppdatera bokningen: `, error);
        return null;
    }    
}

export async function getUsers(
    credentials:string
):Promise<User[]> {
    try{
        const response = await fetch(`${baseUrl}/api/v1/users`, {
            headers:{
                "Authorization": `Basic ${credentials}`
            }
        });

        if(!response.ok){
            throw new Error(`Fetch failed: ${response.status} ${response.body?.values}`)
        }
        const data = await response.json();
        return data;

    }catch(error){
        console.log("Kunde ej hämta användare: ", error);
        return [];
    }
}

export async function getUserById(
    userId:number,
    credentials:string
):Promise<User|null> {
    try{
        const response = await fetch(`${baseUrl}/api/v1/users/${userId}`, {
            headers:{
                "Authorization": `Basic ${credentials}`
            }
        });

        if(!response.ok){
            throw new Error(`Fetch failed: ${response.status} ${response.body?.values}`)
        }
        const data = await response.json();
        return data;

    }catch(error){
        console.log("Kunde ej hämta användare: ", error);
        return null;
    }
}


export async function login(
    username:string, 
    password:string
):Promise<UserCookie> {
    const response = await fetch(`${baseUrl}/api/v1/auth/login`, {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({username, password}),
    });
    
    if (!response.ok) throw new Error("Login failed");
    
    return response.json(); 
}

