import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, Target, Award } from "lucide-react";
import graduationPhoto from "@/assets/graduation-photo.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "Leading with compassion and empathy in all endeavors"
    },
    {
      icon: BookOpen,
      title: "Fear of God",
      description: "Grounded in faith and divine wisdom"
    },
    {
      icon: Target,
      title: "Determination",
      description: "Unwavering commitment to transforming Africa"
    }
  ];

  const skills = [
    "Cybersecurity", "Artificial Intelligence", "Business Management", 
    "Sales", "Video Editing", "Web Development", "App Development",
    "Copywriting", "Negotiation", "Leadership", "Teaching", "Emotional Intelligence"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I am Ezenwukwe Okwunna Evidence, a law graduate, entrepreneur, teacher, and visionary 
                committed to empowering African youth with the skills and mindset needed to leave the 
                third-world bracket.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">
                My journey began with a deep conviction that Africa's transformation lies not in 
                aid or external interventions, but in equipping our people with practical, 
                globally competitive skills. Through <strong className="text-primary">The Nexus Initiative</strong>, 
                I've created an umbrella for all my educational projects and entrepreneurial ventures.
              </p>

              <p className="text-foreground leading-relaxed">
                As the founder of <strong className="text-primary">Step On Ventures Ltd.</strong>, 
                I manage a stainless steel handrails manufacturing and construction company in 
                Anambra State, Nigeria. This hands-on experience in business operations, client 
                relations, and strategic growth fuels my vision for global business expansion.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
                "Work like it all depends on you, trust like it all depends on God."
              </blockquote>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Core Values</h3>
              <div className="grid gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Image & Skills */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="relative">
              <img
                src={graduationPhoto}
                alt="Ezenwukwe Okwunna Evidence - LLB Class of 2025"
                className="w-full h-96 object-cover rounded-2xl shadow-[var(--shadow-elegant)]"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">LLB Graduate</div>
                    <div className="text-sm text-muted-foreground">Class of 2025</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Skills & Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;