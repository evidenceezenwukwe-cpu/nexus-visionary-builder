import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, ExternalLink, Clock, Globe, Zap } from "lucide-react";
import noCodeBookCover from "@/assets/no-code-book-cover.jpg";
import nigerianSitesBookCover from "@/assets/100-sites-book-cover.jpg";

const ProjectsSection = () => {
  const ebooks = [
    {
      title: "100+ Sites Nigerians Are Making Dollars From Monthly",
      description: "A comprehensive guide to legitimate online income opportunities specifically for Nigerians. Discover platforms, strategies, and real-world case studies.",
      cover: nigerianSitesBookCover,
      price: "₦3,000",
      status: "Available",
      features: ["100+ Verified Sites", "Case Studies", "Step-by-step Guides", "Nigerian Focus"]
    },
    {
      title: "Build No-Code Apps with AI",
      description: "Master the art of building powerful applications without writing code. Learn how Lovable and other AI tools are revolutionizing software development.",
      cover: noCodeBookCover,
      price: "₦5,000",
      status: "Available",
      features: ["Under 30 pages", "Step-by-step tutorials", "Real-world examples", "Bonus AI tools chapter"]
    }
  ];

  const courses = [
    {
      title: "Complete CapCut Mobile Masterclass",
      description: "Professional video editing on your mobile device. From basics to advanced techniques used by content creators worldwide.",
      status: "Coming Soon",
      students: "200+ Waitlisted",
      features: ["Mobile-First Approach", "Pro Editing Techniques", "Content Creator Secrets", "Lifetime Access"]
    }
  ];

  const visionaryProjects = [
    {
      title: "Africaversity",
      description: "A revolutionary pan-African platform for pragmatic, AI-driven skill development. Transforming how Africa learns and grows.",
      icon: Globe,
      status: "In Development",
      features: ["AI-Driven Learning", "Pan-African Focus", "Practical Skills", "Global Competitiveness"]
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/20 to-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Projects & <span className="text-primary">Work in Progress</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building resources and platforms that empower African youth with practical skills 
            and global opportunities.
          </p>
        </div>

        {/* E-Books */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Published E-Books</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {ebooks.map((book, index) => (
              <Card key={index} className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-green-500/90 text-white">
                        {book.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2">{book.title}</h4>
                        <p className="text-muted-foreground">{book.description}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {book.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{book.price}</span>
                        <span className="text-sm text-muted-foreground">One-time payment</span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          className="btn-hero flex-1 group"
                          onClick={() => window.open(
                            book.title.includes("100+ Sites") 
                              ? "https://selar.com/49oz67"
                              : "https://selar.com/87687vgp7q",
                            "_blank"
                          )}
                        >
                          <Download className="mr-2 w-4 h-4" />
                          Get Your Copy
                          <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Courses</h3>
          {courses.map((course, index) => (
            <Card key={index} className="glass-card max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{course.title}</h4>
                        <p className="text-muted-foreground">{course.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-orange-500">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">{course.status}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.students}</p>
                    <Button variant="outline" className="btn-hero-outline">
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visionary Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Visionary Projects</h3>
          {visionaryProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="glass-card max-w-5xl mx-auto overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <CardContent className="p-8 lg:p-12 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center animate-glow">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold">{project.title}</h4>
                        <Badge variant="secondary" className="mt-1">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h5 className="font-semibold">Key Features:</h5>
                      <div className="grid grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="btn-hero group">
                      Join Waitlist
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                  
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="relative">
                        <div className="w-48 h-48 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full flex items-center justify-center animate-pulse-glow">
                          <Icon className="w-24 h-24 text-primary" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-ping" />
                      </div>
                      <div>
                        <h5 className="text-xl font-semibold text-primary">Revolutionizing Education</h5>
                        <p className="text-muted-foreground">Across the African Continent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;