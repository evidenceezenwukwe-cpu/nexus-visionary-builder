import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Users, BookOpen, TrendingUp, Heart, Zap } from "lucide-react";

const MissionSection = () => {
  const beliefs = [
    {
      icon: Target,
      title: "Practical Education",
      description: "Africa needs skill-based, globally competitive education that translates directly into economic opportunities."
    },
    {
      icon: TrendingUp,
      title: "Economic Transformation",
      description: "By equipping our youth with the right skills, we can accelerate Africa out of poverty within a generation."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Individual success must translate to community upliftment and national development."
    },
    {
      icon: Heart,
      title: "Faith-Driven Action",
      description: "Combining divine trust with human effort to create lasting change across the continent."
    }
  ];

  const principles = [
    "Responsibility over entitlement",
    "Skills over certificates",
    "Global thinking, local action",
    "Innovation through necessity",
    "Collaborative competition",
    "Sustainable growth mindset"
  ];

  return (
    <section id="mission" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Mission & <span className="text-primary">Philosophy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            My unwavering belief that Africa can accelerate out of poverty through the right kind of 
            education — practical, skill-based, and globally competitive.
          </p>
        </div>

        {/* Core Mission Statement */}
        <div className="mb-20">
          <Card className="glass-card max-w-5xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto animate-glow">
                      <BookOpen className="w-16 h-16 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Transforming Africa</h3>
                    <p className="text-muted-foreground">One Mind at a Time</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 lg:p-12 space-y-6">
                <h3 className="text-3xl font-bold">The African Renaissance</h3>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    I believe Africa's transformation will not come from external aid or foreign 
                    interventions, but from empowering our own people with practical, globally 
                    competitive skills.
                  </p>
                  <p>
                    Through <strong className="text-primary">The Nexus Initiative</strong>, I'm building 
                    a movement that equips African youth with the mindset, skills, and opportunities 
                    needed to compete on the global stage while solving local problems.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-6 italic text-lg">
                    "The future of Africa lies in the hands of its youth, but only if we give 
                    them the right tools and the right mindset."
                  </blockquote>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Core Beliefs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Core Beliefs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold">{belief.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {belief.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className="mb-20">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12 text-center space-y-8">
              <div className="flex items-center justify-center">
                <Target className="w-16 h-16 text-primary animate-pulse-glow" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Personal Philosophy</h3>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  My life is grounded in three fundamental principles: <strong className="text-primary">Love</strong>, 
                  <strong className="text-primary"> Fear of God</strong>, and <strong className="text-primary">Determination</strong>. 
                  These values guide every decision I make and every project I undertake.
                </p>
              </div>
              <div className="bg-primary/5 rounded-xl p-6">
                <h4 className="text-2xl font-bold mb-4 text-primary">Guiding Principles</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {principles.map((principle, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-foreground">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Join the Movement</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Together, we can build an Africa where every young person has access to 
                  world-class education, practical skills, and unlimited opportunities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero group">
                  <Users className="mr-2 w-5 h-5" />
                  Join The Nexus Initiative
                  <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="btn-hero-outline">
                  <BookOpen className="mr-2 w-5 h-5" />
                  Learn More About Our Mission
                </Button>
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground italic">
                  "The best time to plant a tree was 20 years ago. The second best time is now. 
                  Let's plant the seeds of Africa's future today."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;