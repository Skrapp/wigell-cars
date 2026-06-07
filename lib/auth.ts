import { cookies } from "next/headers";
import { User } from "./types";

export async function getUser():Promise<User | null>{
    const cookie = await cookies();
    const userCookie = cookie.get("user");
        
    if(!userCookie) return null;

    const userWithCredentials = JSON.parse(userCookie.value);

    return userWithCredentials;
}