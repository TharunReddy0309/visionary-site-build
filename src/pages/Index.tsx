import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features"; 
import Workflow from "@/components/Workflow";
import Technology from "@/components/Technology";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="workflow">
        <Workflow />
      </section>
      <section id="impact">
        <Impact />
      </section>
      <section id="technology">
        <Technology />
      </section>
      <section id="team">
        <Footer />
      </section>
    </main>
  );
};

export default Index;
