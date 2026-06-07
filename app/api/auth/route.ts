import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const userWithAuth = await request.json();
    const cookie = await cookies();

    cookie.set(
        "user",
        JSON.stringify(userWithAuth),{
            httpOnly:true, //js kan ej läsa
            secure:false, //i produktion ändra till true så att det endast skickas över https
            path: "/", //cookie gäller över hela webbplatsen
            maxAge:60*60*24 //cookie gäller i 60 (s) * 60 (min) * 24 (h) = 1 dygn
        }
    );
    
    return NextResponse.json({
        "success":true,
    });
}