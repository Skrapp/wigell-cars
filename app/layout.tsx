import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import Navigation from "./components/Navigation";
import { adminNavigation, mainNavigation, userNavigation } from "./pages";
import UserStatus from "./components/UserStatus";
import { getUser } from "@/lib/auth";
import AdFooter from "./components/AdFooter";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wigells biluthyrning",
  description: "Hyr din nästa bil hos Wigell",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col gap-2">
        <header className="flex flex-row p-3 justify-center">
          <a href="/">
            <Image 
              className="p-1 items-end"
              src="/imgs/KoncernLogga.png" 
              alt="Koncern Logga" 
              width={100} 
              height={100}
            />
          </a>
          <Navigation className="flex-2/3 max-w-250" 
          pages={user 
            ? user.isAdmin 
              ? mainNavigation.concat(userNavigation).concat(adminNavigation)
              : mainNavigation.concat(userNavigation)
            : mainNavigation}/>
          <UserStatus/>

        </header>
        <main className="mb-34">{children}</main>
        <AdFooter imageSrc="/imgs/ad-detberorpa.png" href="https://www.linkedin.com/in/tomas-wigell-06343a198/"/>
          
      </body>
    </html>
  );
}
