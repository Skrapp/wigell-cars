"use client"
import { login } from "@/lib/api";
import { redirect, useRouter } from "next/navigation";
import Button from "../components/Button";
import { useState} from "react";
import { FormEvent} from "react";
import Link from "next/link";
import LoginForm from "../components/forms/LoginForm";
import PageTitle from "../components/headings/PageTitle";
import Card from "../components/Card";

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
            redirect("/")
        }catch(error){
            console.error("Login error: ", error);
        }
    }

    //TODO gör till component => LoginForm
    return (
        <div className="boxed-content m-auto">
            <PageTitle>Logga in</PageTitle>
            <Card>
            <LoginForm/>
            <p>Har du ingen användare? <Link className="underline cursor-pointer" href="login/new-user">Skapa en ny</Link></p>
            </Card>
        </div>
    );
}