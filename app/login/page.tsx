"use client"
import { login } from "@/lib/api";
import { useRouter } from "next/navigation";
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

            await fetch("api/auth",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(user),            
            });
            router.refresh();
        }catch(error){
            console.error("Login error: ", error);
        }
    }

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
                <button type="submit">Logga in</button>
            </form>
        </div>
    );
}