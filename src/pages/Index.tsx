import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ClientLogos } from "@/components/landing/ClientLogos";
import { Services } from "@/components/landing/Services";
import { Differentials } from "@/components/landing/Differentials";
import { Method } from "@/components/landing/Method";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <Differentials />
        <Method />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
