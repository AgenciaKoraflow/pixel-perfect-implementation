import { Navbar } from "@/components/landing/Navbar";
import { HeroSequence } from "@/components/landing/HeroSequence";
import { Bottlenecks } from "@/components/landing/Bottlenecks";
import { Services } from "@/components/landing/Services";
import { Method } from "@/components/landing/Method";
import { Differentials } from "@/components/landing/Differentials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSequence />
        <Bottlenecks />
        <Services />
        <Method />
        <Differentials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
