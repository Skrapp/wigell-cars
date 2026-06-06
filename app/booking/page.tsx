
import PageTitle from "../components/headings/PageTitle"
import Button from "../components/Button"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import BookingForm from "../components/forms/BookingForm";

type PageProps = {
    searchParams: Promise<{
        carId?: string;
    }>;
};

export default async function Booking({
    searchParams,
}: PageProps) {
    const cookie = await cookies();
        const userCookie = cookie.get("user");
    
        if(!userCookie) redirect("/login");
    
        const user = JSON.parse(userCookie.value);
        const {carId} = await searchParams;
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
            <section className="boxed-content flex items-center justify-center ">
                <BookingForm user={user} carId={carId}/>
            </section>
        </div>
    )
}