import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Cpu, MapIcon, BarChart } from "lucide-react";
import workflowImage from "@/assets/workflow-diagram.jpg";

const Workflow = () => {
  const steps = [
    {
      icon: Upload,
      title: "Document Scan",
      description: "Upload legacy FRA documents, handwritten pattas, and survey records",
      details: ["Multi-format support", "Batch processing", "Quality validation"],
      color: "forest"
    },
    {
      icon: Cpu,
      title: "AI Processing",
      description: "Advanced OCR and NER extract structured data with confidence scoring",
      details: ["LayoutLM models", "Entity extraction", "Confidence metrics"],
      color: "tech"
    },
    {
      icon: MapIcon,
      title: "Geospatial Mapping", 
      description: "Automated georeferencing and asset mapping using satellite imagery",
      details: ["Satellite analysis", "Polygon generation", "Asset classification"],
      color: "forest"
    },
    {
      icon: BarChart,
      title: "Decision Support",
      description: "Intelligent recommendations for scheme convergence and interventions",
      details: ["Priority scoring", "Impact analysis", "Explainable AI"],
      color: "tech"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <ArrowRight className="h-4 w-4" />
            <span className="text-sm font-semibold">Intelligent Workflow</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            From Paper to <span className="text-primary">Digital Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process transforms decades of paper records into actionable 
            digital insights through advanced AI and geospatial technologies
          </p>
        </div>

        {/* Workflow Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-medium animate-fade-in">
          <img 
            src={workflowImage} 
            alt="FRA Atlas AI Workflow: Document Scan → AI Processing → Digital Mapping → Analytics Dashboard"
            className="w-full h-auto"
          />
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-border z-0" />
              )}
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-soft
                  ${step.color === 'forest' ? 'bg-forest text-primary-foreground' : 'bg-tech text-primary-foreground'}
                  group-hover:scale-110 transition-smooth`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                {/* Step Number */}
                <div className="text-sm font-bold text-primary mb-2">
                  Step {index + 1}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>
                
                {/* Details */}
                <ul className="space-y-1 text-sm">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 
                        ${step.color === 'forest' ? 'bg-forest' : 'bg-tech'}`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-background/80 backdrop-blur-md rounded-2xl p-8 shadow-soft border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Transform FRA Administration?
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the complete workflow with our interactive demo showcasing 
              real FRA document processing and intelligent recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="forest" size="lg" className="group">
                Try Interactive Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline_forest" size="lg">
                View Technical Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;