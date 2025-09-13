import { Heart, ExternalLink } from "lucide-react";
import nexusLogo from "@/assets/nexus-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    "Quick Links": [
      { name: "About", href: "#about" },
      { name: "Work", href: "#work" },
      { name: "Projects", href: "#projects" },
      { name: "Mission", href: "#mission" },
      { name: "Contact", href: "#contact" }
    ],
    "Resources": [
      { name: "E-Books", href: "#projects" },
      { name: "Courses", href: "#projects" },
      { name: "Africaversity", href: "#projects" },
      { name: "The Nexus Initiative", href: "#mission" }
    ],
    "Connect": [
      { name: "Instagram", href: "https://instagram.com/evidenceezenwukwe", external: true },
      { name: "Twitter/X", href: "https://twitter.com/evidenceezen", external: true },
      { name: "LinkedIn", href: "https://linkedin.com/in/evidenceezenwukwe", external: true },
      { name: "YouTube", href: "https://youtube.com/@thenexusinitiative", external: true }
    ]
  };

  return (
    <footer className="bg-gradient-to-t from-secondary/30 to-background border-t border-border/50">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={nexusLogo} 
                alt="The Nexus Initiative" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-display font-bold text-xl">
                  The Nexus Initiative
                </div>
                <div className="text-sm text-muted-foreground">
                  by Ezenwukwe Okwunna Evidence
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Empowering Africa through Pragmatic Education, Technology, and Purpose-Driven 
              Entrepreneurship. Building the future, one mind at a time.
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for Africa's Future</span>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="font-semibold text-foreground">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-1 group"
                    >
                      <span>{link.name}</span>
                      {link.external && (
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Ezenwukwe Okwunna Evidence. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;