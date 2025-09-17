import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ScanLine, 
  Brain, 
  Map, 
  BarChart3, 
  Shield, 
  Smartphone,
  FileText,
  Layers,
  Target
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: ScanLine,
      title: "OCR & Document Processing",
      description: "Advanced AI-powered OCR with Named Entity Recognition (NER) for digitizing legacy FRA documents and handwritten pattas.",
      capabilities: ["LayoutLM/TrOCR integration", "Multi-language support", "Confidence scoring"],
      color: "forest"
    },
    {
      icon: Brain,
      title: "AI Asset Mapping",
      description: "Automated satellite imagery analysis for identifying forest patches, water bodies, and agricultural areas using computer vision.",
      capabilities: ["NDVI/NDWI analysis", "Semantic segmentation", "Sentinel-2 integration"],
      color: "tech"
    },
    {
      icon: Map,
      title: "WebGIS Atlas",
      description: "Interactive mapping platform with IFR, CR, and CFR layer management, temporal analysis, and spatial querying capabilities.",
      capabilities: ["PostGIS backend", "Real-time updates", "Multi-scale visualization"],
      color: "forest"
    },
    {
      icon: BarChart3,
      title: "Decision Support System",
      description: "Intelligent recommendation engine combining rule-based logic with explainable ML for scheme convergence and prioritization.",
      capabilities: ["SHAP explanations", "Priority scoring", "Impact prediction"],
      color: "tech"
    },
    {
      icon: Shield,
      title: "Data Governance",
      description: "Secure, role-based access control with audit trails, consent management, and privacy protection for sensitive tribal data.",
      capabilities: ["RBAC implementation", "Audit logging", "Consent tracking"],
      color: "forest"
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Offline-capable mobile interface for field officers and patta holders to provide feedback and updates from remote areas.",
      capabilities: ["Offline sync", "GPS integration", "Field validation"],
      color: "tech"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Layers className="h-8 w-8 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comprehensive <span className="text-primary">FRA Digitization</span> Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end solution combining cutting-edge AI, geospatial technologies, 
            and user-centric design to transform Forest Rights Act administration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover-lift border-border/50 bg-gradient-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 
                  ${feature.color === 'forest' ? 'bg-forest/10 text-forest' : 'bg-tech/10 text-tech'}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full mr-3 
                        ${feature.color === 'forest' ? 'bg-forest' : 'bg-tech'}`} />
                      {capability}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold text-muted-foreground">Integration Ready</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Seamless Government Integration
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Built for integration with existing government systems including MGNREGA, JJM, and DAJGUA 
              through comprehensive APIs and standardized data formats.
            </p>
            <Button variant="outline_forest" size="lg">
              View Integration Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;