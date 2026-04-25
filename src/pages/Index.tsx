import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problema } from "@/components/landing/Problema";
import { Solucao } from "@/components/landing/Solucao";
import { ComoFunciona } from "@/components/landing/ComoFunciona";
import { PorqueNos } from "@/components/landing/PorqueNos";
import { FAQ } from "@/components/landing/FAQ";
import { CTAFinal } from "@/components/landing/CTAFinal";
import { Footer } from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Hero />
      <Problema />
      <Solucao />
      <ComoFunciona />
      <PorqueNos />
      <FAQ />
      <CTAFinal />
    </main>
    <Footer />
  </div>
);

export default Index;
