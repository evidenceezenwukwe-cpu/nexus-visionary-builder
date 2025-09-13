import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, TrendingUp, ExternalLink } from "lucide-react";

const WorkSection = () => {
  const accomplishments = [
    {
      number: "500+",
      label: "Students Taught",
      description: "Across multiple courses and workshops"
    },
    {
      number: "15+",
      label: "Certifications",
      description: "In business, tech, and leadership"
    },
    {
      number: "3",
      label: "Active Projects",
      description: "Building Africa's future"
    },
    {
      number: "1",
      label: "Manufacturing Business",
      description: "Successfully managing operations"
    }
  ];

  return (
    <section id="work" className="py-20 lg:py-32">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Entrepreneurial <span className="text-primary">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world business experience that grounds my vision for global expansion and 
            empowers my mission to transform Africa through entrepreneurship.
          </p>
        </div>

        {/* Step On Ventures Showcase */}
        <div className="mb-20">
          <Card className="glass-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Step On Ventures Ltd.</h3>
                    <p className="text-muted-foreground">Managing Director & Founder</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    Leading a stainless steel handrails manufacturing and construction company 
                    in Anambra State, Nigeria. I handle everything from client consultations 
                    and site measurements to business strategy and operational management.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <div>
                        <strong>Operations Management:</strong> Overseeing daily operations, 
                        quality control, and project delivery timelines
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <div>
                        <strong>Client Relations:</strong> Direct client interactions, 
                        site measurements, and custom solution development
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <div>
                        <strong>Business Growth:</strong> Strategic planning for expansion 
                        and market penetration across Nigeria
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="btn-hero group">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View Business Profile
                  <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto animate-glow">
                      <Building2 className="w-16 h-16 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Active & Growing</h4>
                    <p className="text-muted-foreground">Serving clients across Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Accomplishments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {accomplishments.map((item, index) => (
            <Card key={index} className="glass-card text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:animate-pulse-glow">
                  {item.number}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {item.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-20 text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My hands-on experience with Step On Ventures has taught me that real business 
                success comes from understanding every aspect of operations, maintaining strong 
                client relationships, and continuously innovating. This experience fuels my 
                vision for scaling African businesses globally and sharing practical knowledge 
                with the next generation of entrepreneurs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;