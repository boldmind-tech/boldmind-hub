import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Hero from "@/components/sections/Hero";
import Ecosystem from "@/components/sections/Ecosystem";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ecosystem />
      <Footer />
    </>
  );
}
