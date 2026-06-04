import Image from "next/image";
import PageTitle from "./components/headings/PageTitle";
import SectionTitle from "./components/headings/SectionTitle";
import Button from "./components/Button";
import { getCars } from "@/lib/api";
import Card from "./components/Card";

export default async function Home() {
  const cars = await getCars();
  console.log(typeof cars);
  return (
    <div>
      <section className=" w-full 
      bg-[url('/imgs/homepage-hero.jpg')] bg-cover bg-position-[center_60%]
      text-center p-20">
        <div className="boxed-content flex flex-col items-center gap-6">
          <PageTitle>Wigells biluthyrning</PageTitle>
          <p className="text-lg">Ta din åktur till nästa nivå.</p>
          <Button href="/cars">
            Se alla bilar
          </Button>
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
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* {car.image && (
                  <Image
                    src={car.image}
                    alt="Car image"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  /> 
                )}*/}
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{car.name} {car.model}</h3>
                  <p className="text-gray-600">{car.price} kr/dag</p>
                </div>
              </div>
          )))}
        </div>
      </section>
    </div>
  );
}
