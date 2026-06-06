"use client"
import Button from "./Button";
import { useRouter } from "next/navigation";

type LogoutButtonProps = {
    className?:string;
}

export default function LogoutButton({
    className
}:LogoutButtonProps){
    
    const router = useRouter();

    async function logoutUser(){
        await fetch("/api/logout", {
    method: "POST",
    });

    router.push("/");
    router.refresh();
    }

    return(
        <div>
            <Button onClick={logoutUser}>Logga ut</Button>
        </div>
    )
}