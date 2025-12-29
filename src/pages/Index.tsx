import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HostYourBot from "@/components/HostYourBot";
import CloudflareProtection from "@/components/CloudflareProtection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <Features />
      <HostYourBot />
      <CloudflareProtection />
      <Footer />
    </main>
  );
};

export default Index;
