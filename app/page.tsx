import Image from "next/image";
import PageTitle from "./components/headings/PageTitle";
import SectionTitle from "./components/headings/SectionTitle";
import Button from "./components/Button";
import { getCars } from "@/lib/api";
import CarCard from "./components/CarCard";

export default async function Home() {
  const cars = await getCars();
  return (
    <div>
      <section className=" w-full 
      bg-[url('/imgs/homepage-hero.jpg')] bg-cover bg-position-[center_60%]
      ">
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
      <section className="boxed-content flex flex-col items-center gap-6 w-full">
        <SectionTitle>Bilar</SectionTitle>
        <p className="text-lg">Utforska vårt breda utbud av bilar, alla i toppskick och redo för din nästa resa.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cars.length === 0 ? (
              <p className="text-center">Inga bilar hittade</p>
            ) : (
            cars.map((car) => (
              <CarCard key={car.id} car={car} />
            )))}
        </div>
      </section>
    </div>
  );
}
