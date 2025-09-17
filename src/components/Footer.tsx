import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Mail, 
  ExternalLink, 
  MapPin, 
  FileText, 
  Users, 
  Award,
  TreePine
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Project Overview", href: "#overview", icon: FileText },
    { name: "Technology Stack", href: "#technology", icon: Github },
    { name: "Team Members", href: "#team", icon: Users },
    { name: "Documentation", href: "#docs", icon: ExternalLink }
  ];

  const projectInfo = [
    { label: "Problem ID", value: "25108" },
    { label: "Category", value: "Smart India Hackathon 2025" },
    { label: "Team", value: "Blue Bite" },
    { label: "Status", value: "In Development" }
  ];

  const teamMembers = [
    { name: "Vikas R", role: "Lead Developer", github: "vikasr1503" },
    { name: "Team Member 2", role: "AI/ML Engineer", github: "#" },
    { name: "Team Member 3", role: "GIS Specialist", github: "#" },
    { name: "Team Member 4", role: "Frontend Developer", github: "#" }
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Project Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-forest/10 rounded-lg">
                <TreePine className="h-6 w-6 text-forest" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">FRA Atlas</h3>
                <p className="text-sm text-muted-foreground">AI-Powered Solution</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Revolutionary AI-powered Forest Rights Act digitization system combining 
              intelligent OCR, automated asset mapping, and WebGIS decision support.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Project Details</h4>
            <div className="space-y-3">
              {projectInfo.map((info, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{info.label}:</span>
                  <span className="text-foreground font-medium">{info.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-forest/5 rounded-lg border border-forest/20">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-forest" />
                <span className="text-sm font-semibold text-foreground">SIH 2025</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Smart India Hackathon 2025 submission for revolutionizing 
                Forest Rights Act administration through AI and GIS technology.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-forest/10 rounded-lg">
                  <Mail className="h-4 w-4 text-forest" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Email Support</div>
                  <div className="text-xs text-muted-foreground">fra.atlas.support@sih2025.gov.in</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-tech/10 rounded-lg">
                  <Github className="h-4 w-4 text-tech" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Open Source</div>
                  <div className="text-xs text-muted-foreground">Contribute on GitHub</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline_forest" size="sm" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Request Demo
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2025 Team Blue Bite. Built for SIH 2025.</span>
            <div className="hidden md:flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>India</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/vikasr1503" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth text-sm"
            >
              GitHub Repository
            </a>
            <a 
              href="#docs" 
              className="text-muted-foreground hover:text-primary transition-smooth text-sm"
            >
              Documentation
            </a>
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-3 w-3" />
              Live Demo
            </Button>
          </div>
        </div>

        {/* Additional Footer Note */}
        <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border/30">
          <p className="text-xs text-center text-muted-foreground">
            This project is developed as part of Smart India Hackathon 2025 to address 
            the digitization challenges in Forest Rights Act administration. 
            Built with modern web technologies and AI/ML frameworks for scalable government deployment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;