import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Users } from "lucide-react";
import professionalHeadshot from "@/assets/professional-headshot.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in-up">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-light leading-[0.9] tracking-tight">
                <span className="block text-foreground font-extralight">Evidence</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">
                  Ezenwukwe
                </span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-lg sm:text-xl lg:text-2xl text-primary font-medium tracking-wide uppercase">
                  Lawyer • Entrepreneur • Builder
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Empowering Africa through Pragmatic Education, Technology, and Purpose-Driven Entrepreneurship.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-hero group"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-hero-outline"
              >
                <Download className="mr-2 w-5 h-5" />
                Download E-Book
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-hero-outline"
                onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Users className="mr-2 w-5 h-5" />
                Join My Mission
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-6 lg:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">2</div>
                <div className="text-xs sm:text-sm text-muted-foreground">E-Books Published</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">1</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Business Founded</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-glow" />
              <img
                src={professionalHeadshot}
                alt="Evidence Ezenwukwe"
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-[var(--shadow-elegant)] animate-float"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center animate-glow">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;