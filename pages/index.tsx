import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from '@/components/NavBar'
import NavRoot from "@/components/NavRoot";
import HomeComponente from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar />
      <NavRoot />
      <HomeComponente />
    </main>
  );
}
