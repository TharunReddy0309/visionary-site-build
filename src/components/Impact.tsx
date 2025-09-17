import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, FileText, MapPin, Clock, Award } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const Impact = () => {
  const impactMetrics = [
    {
      icon: Users,
      value: "10M+",
      label: "Tribal Beneficiaries",
      description: "Across multiple states",
      color: "forest"
    },
    {
      icon: FileText,
      value: "50K+",
      label: "Documents Digitized",
      description: "Legacy FRA records",
      color: "tech"
    },
    {
      icon: MapPin,
      value: "200+",
      label: "Villages Mapped",
      description: "High-resolution assets", 
      color: "forest"
    },
    {
      icon: Clock,
      value: "95%",
      label: "Time Reduction",
      description: "In processing claims",
      color: "tech"
    }
  ];

  const problemStatement = {
    current: [
      "Legacy paper-based FRA record systems",
      "Manual processing leading to delays",
      "Scattered data across departments",
      "Lack of spatial visualization tools",
      "Limited scheme convergence insights"
    ],
    solution: [
      "100% digital transformation with AI",
      "Automated OCR and asset mapping",
      "Centralized WebGIS platform",
      "Interactive spatial analytics",
      "Intelligent decision support system"
    ]
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Problem & Solution */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-semibold">Transformative Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Revolutionizing <span className="text-primary">Forest Rights</span> Administration
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Addressing critical challenges in FRA implementation through innovative 
              AI and geospatial technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Current Challenges */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <div className="w-4 h-4 bg-destructive rounded-full mr-3" />
                Current Challenges
              </h3>
              <div className="space-y-4">
                {problemStatement.current.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-background/50 rounded-lg border border-border/50">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Solution */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <div className="w-4 h-4 bg-forest rounded-full mr-3" />
                Our Solution
              </h3>
              <div className="space-y-4">
                {problemStatement.solution.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-forest/5 rounded-lg border border-forest/20">
                    <div className="w-2 h-2 bg-forest rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <Card 
              key={index}
              className="text-center group hover-lift bg-background/80 backdrop-blur-md border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mx-auto mb-3
                  ${metric.color === 'forest' ? 'bg-forest/10 text-forest' : 'bg-tech/10 text-tech'}`}>
                  <metric.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {metric.value}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardTitle className="text-lg font-semibold mb-1 text-foreground">
                  {metric.label}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-tech/10 text-tech px-3 py-1 rounded-full mb-4">
              <Award className="h-4 w-4" />
              <span className="text-sm font-semibold">Interactive Demo</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Experience the Complete System
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our comprehensive WebGIS platform provides real-time insights, 
              interactive mapping, and intelligent analytics for informed decision making.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Real-time FRA claim tracking and status updates",
                "Interactive mapping with satellite imagery overlay", 
                "AI-powered recommendations and priority scoring",
                "Comprehensive reporting and export capabilities"
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="forest" size="lg">
                Launch Dashboard Demo
              </Button>
              <Button variant="outline_forest" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-medium hover:shadow-glow transition-smooth">
              <img 
                src={dashboardPreview}
                alt="FRA Atlas Dashboard showing GIS mapping interface, forest area analytics, and AI-powered insights for tribal land rights management"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;