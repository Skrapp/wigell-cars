"use client"

import { login } from "@/lib/api";
import { redirect, useRouter } from "next/navigation";
import Button from "../../components/Button";
import { useState} from "react";
import { FormEvent} from "react";
import FormField from "./FormField";

export default function LoginForm(){
     const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const router = useRouter();
        let loggedInUser ="";
    
        async function handleLogin(e: FormEvent<HTMLFormElement>){
            e.preventDefault();
    
            try{
                const user = await login(username, password);
    
                console.log(`Inloggad: ${user.username}`)
                loggedInUser = user.username;
    
                const credentials = btoa(`${username}:${password}`);
                const userWithCredentials = {
                    ...user,
                    credentials
                };
    
                await fetch("/api/auth",{
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body:JSON.stringify(userWithCredentials),            
                });
                router.refresh();
                redirect("/")
            }catch(error){
                console.error("Login error: ", error);
            }
        }
    return (
    <form onSubmit={handleLogin}>
        <FormField
            label="Användarnamn"
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={setUsername}
            required
        />
        <FormField
            label="Lösenord"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            required
        />
        <Button type="submit">Logga in</Button>
    </form>
    )
}