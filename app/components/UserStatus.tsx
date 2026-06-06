import { cookies } from "next/headers";
import Button from "./Button";
import LogoutButton from "./LogoutButton";

type UserStatusProps = {
    className?:string;
}

export default async function UserStatus({
    className
}:UserStatusProps){
    const cookie = await cookies();
    const userCookie = cookie.get("user");

    if(!userCookie){
        return(
            <div className={`${className ?? ''}`}>
                <Button href="/login">Logga in</Button>
            </div>
        )
    }
    const user = JSON.parse(userCookie.value);

    return(
        <div>
            <p>Hej {user.username}!</p>
            <LogoutButton/>
        </div>
    )
}