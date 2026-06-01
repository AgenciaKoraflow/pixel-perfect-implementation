import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { VideoSection } from "@/components/landing/ClientLogos";
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
        <Hero />
        <VideoSection />
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
