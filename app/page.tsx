import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import Clients from "@/components/Clients";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <HowItWorks />
        <Pricing />
        <Security />
        <Clients />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
