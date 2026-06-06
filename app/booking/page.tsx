
import PageTitle from "../components/headings/PageTitle"
import Button from "../components/Button"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Booking(){
    const cookie = await cookies();
        const userCookie = cookie.get("user");
    
        if(!userCookie) redirect("/login");
    
        const user = JSON.parse(userCookie.value);
    return(
        <div>
            <section className=" w-full 
            bg-[url('/imgs/homepage-hero.jpg')] bg-cover bg-position-[center_60%]">
                <div className="bg-black/40 p-10 md:p-20"> 
                    <div className="boxed-content flex flex-col items-center gap-6 
                    text-center text-white">
                        <PageTitle>Wigells biluthyrning</PageTitle>
                        <p className="text-xl">Ta din åktur till nästa nivå.</p>
                        <Button href="/cars">
                        Se alla bilar
                        </Button>
                    </div>
                </div>
            </section>
            <section className="boxed-content">
                <form>
                    <label htmlFor="name">Användare</label>
                    <input className="border" id="name" value={user.username} disabled></input>
                    
                </form>
            </section>
        </div>
    )
}