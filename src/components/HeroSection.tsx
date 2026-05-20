import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Users } from "lucide-react";
import professionalHeadshot from "@/assets/professional-headshot.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-background to-background/95">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />

      <div className="section-container relative z-10 py-20 lg:py-0">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-light leading-[0.9]">
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
                  Nigerian Law School graduate. Founder of Evicom Concept and Agbani Runs — building at the intersection of law, technology, and entrepreneurship.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
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
            <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-2">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">2</div>
                <div className="text-xs sm:text-sm text-muted-foreground">E-Books Published</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">2</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Businesses Founded</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <img
                src={professionalHeadshot}
                alt="Evidence Ezenwukwe"
                className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover rounded-full shadow-[var(--shadow-elegant)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
