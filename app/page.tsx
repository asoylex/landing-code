import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing/>
      <Contact/>
      <Footer />
    </>

  );
}
