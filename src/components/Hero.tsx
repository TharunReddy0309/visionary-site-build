import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MapPin, Bot } from "lucide-react";
import heroImage from "@/assets/hero-forest-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-overlay">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6 animate-slide-in-left">
            <div className="bg-primary-foreground/20 backdrop-blur-md rounded-full p-2">
              <Bot className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium bg-primary-foreground/20 backdrop-blur-md px-4 py-1 rounded-full">
              Smart India Hackathon 2025 • Problem ID: 25108
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-scale-in">
            AI-Powered <span className="text-primary-glow">FRA Atlas</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto animate-slide-in-right">
            Revolutionary Forest Rights Act digitization system combining AI-driven OCR, 
            automated asset mapping, and intelligent WebGIS decision support for tribal communities
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button variant="hero" size="xl" className="group">
              Explore Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Download className="mr-2 h-5 w-5" />
              Documentation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in">
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-glow mb-2">100%</div>
              <div className="text-sm">Digital Transformation</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-glow mb-2">AI-First</div>
              <div className="text-sm">OCR & Asset Mapping</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-glow mb-2">WebGIS</div>
              <div className="text-sm">Decision Support System</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-pulse">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;