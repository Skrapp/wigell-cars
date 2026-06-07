"use client"
import { login } from "@/lib/api";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import { useState} from "react";
import { FormEvent} from "react";

export default function Login(){
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
        }catch(error){
            console.error("Login error: ", error);
        }
    }

    //TODO gör till component => LoginForm
    return (
        <div className="boxed-content">
            <h1>Logga in</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Logga in</Button>
            </form>
        </div>
    );
}