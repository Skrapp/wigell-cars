import Image from "next/image";
import PageTitle from "./components/headings/PageTitle";
import SectionTitle from "./components/headings/SectionTitle";
import Button from "./components/Button";

export default function Home() {
  return (
    <div>
      <section className=" w-full 
      bg-[url('/imgs/homepage-hero.jpg')] bg-cover bg-center 
      text-center p-20">
        <div className="boxed-content flex flex-col items-center gap-6">
          <PageTitle>Wigells biluthyrning</PageTitle>
          <p className="text-lg">Ta din åktur till nästa nivå.</p>
          <Button href="/cars">
            Se alla bilar
          </Button>
        </div>
      </section>
      <section className="flex flex-col items-center gap-6 w-full">
        <SectionTitle>Bilar</SectionTitle>
        <p className="text-lg">Utforska vårt breda utbud av bilar, alla i toppskick och redo för din nästa resa.</p>

      </section>
    </div>
  );
}
