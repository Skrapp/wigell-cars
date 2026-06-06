import { cookies } from "next/headers";
import Button from "./Button";

export default async function UserStatus(){
    const cookie = await cookies();
    const userCookie = cookie.get("user");

    if(!userCookie){
        return(
            <Button href="/login">Logga in</Button>
        )
    }
    const user = JSON.parse(userCookie.value);
    return(
        <p>Hej {user.username}!</p>
    )
}