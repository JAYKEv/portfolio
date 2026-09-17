import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Archive } from "@/components/Archive";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <FeaturedWork />
        <Archive />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
