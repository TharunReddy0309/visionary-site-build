import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Shield, 
  Zap,
  Monitor,
  Server
} from "lucide-react";

const Technology = () => {
  const techStack = [
    {
      category: "Frontend",
      icon: Monitor,
      color: "tech",
      technologies: [
        { name: "React", type: "Framework" },
        { name: "TypeScript", type: "Language" },
        { name: "Tailwind CSS", type: "Styling" },
        { name: "Mapbox GL JS", type: "Mapping" },
        { name: "Zustand", type: "State Management" }
      ]
    },
    {
      category: "Backend", 
      icon: Server,
      color: "forest",
      technologies: [
        { name: "FastAPI", type: "Framework" },
        { name: "Pydantic", type: "Validation" },
        { name: "Celery", type: "Task Queue" },
        { name: "PyTorch", type: "ML Framework" },
        { name: "TorchServe", type: "Model Serving" }
      ]
    },
    {
      category: "Database",
      icon: Database,
      color: "tech",
      technologies: [
        { name: "PostgreSQL", type: "Primary DB" },
        { name: "PostGIS", type: "Spatial Extension" },
        { name: "Redis", type: "Caching" },
        { name: "Elasticsearch", type: "Search" },
        { name: "MinIO", type: "Object Storage" }
      ]
    },
    {
      category: "AI/ML",
      icon: Cpu,
      color: "forest", 
      technologies: [
        { name: "LayoutLM", type: "Document AI" },
        { name: "TrOCR", type: "OCR" },
        { name: "YOLO", type: "Object Detection" },
        { name: "SHAP", type: "Explainable AI" },
        { name: "Scikit-learn", type: "ML Tools" }
      ]
    },
    {
      category: "Infrastructure",
      icon: Globe,
      color: "tech",
      technologies: [
        { name: "Docker", type: "Containerization" },
        { name: "Kubernetes", type: "Orchestration" },
        { name: "GitHub Actions", type: "CI/CD" },
        { name: "Prometheus", type: "Monitoring" },
        { name: "Grafana", type: "Visualization" }
      ]
    },
    {
      category: "Security",
      icon: Shield,
      color: "forest",
      technologies: [
        { name: "JWT", type: "Authentication" },
        { name: "OAuth 2.0", type: "Authorization" },
        { name: "HashiCorp Vault", type: "Secrets" },
        { name: "SSL/TLS", type: "Encryption" },
        { name: "RBAC", type: "Access Control" }
      ]
    }
  ];

  const architectureHighlights = [
    {
      title: "Microservices Architecture",
      description: "Scalable, maintainable services for different components",
      icon: Zap
    },
    {
      title: "Cloud-Native Design", 
      description: "Kubernetes-ready with auto-scaling capabilities",
      icon: Globe
    },
    {
      title: "API-First Approach",
      description: "RESTful APIs with OpenAPI documentation", 
      icon: Code2
    },
    {
      title: "Security by Design",
      description: "End-to-end encryption and compliance ready",
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forest/10 text-forest px-4 py-2 rounded-full mb-6">
            <Cpu className="h-4 w-4" />
            <span className="text-sm font-semibold">Technical Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Production-Ready <span className="text-primary">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with enterprise-grade technologies ensuring scalability, security, 
            and maintainability for government-scale deployments
          </p>
        </div>

        {/* Technology Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techStack.map((stack, index) => (
            <Card 
              key={index}
              className="group hover-lift bg-gradient-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl
                    ${stack.color === 'forest' ? 'bg-forest/10 text-forest' : 'bg-tech/10 text-tech'}`}>
                    <stack.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {stack.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{tech.name}</span>
                      <Badge 
                        variant="secondary"
                        className="text-xs bg-muted/50 text-muted-foreground"
                      >
                        {tech.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architecture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {architectureHighlights.map((highlight, index) => (
            <div 
              key={index}
              className="text-center group animate-slide-in-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <highlight.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">
                {highlight.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Development Roadmap */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-soft border border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Development Roadmap
            </h3>
            <p className="text-muted-foreground">
              Structured development approach from prototype to production-scale deployment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-forest/10 text-forest w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2 text-foreground">MVP Development</h4>
              <p className="text-sm text-muted-foreground">
                Core OCR, mapping, and DSS functionality with sample data integration
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-tech/10 text-tech w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Beta Deployment</h4>
              <p className="text-sm text-muted-foreground">
                Multi-district pilot with automated CI/CD and monitoring systems
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Production Scale</h4>
              <p className="text-sm text-muted-foreground">
                Multi-state deployment with full governance, security, and integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;