import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MessageSquare, 
  Send, 
  MapPin, 
  Phone, 
  Instagram, 
  Twitter,
  Video
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "evidence@thenexusinitiative.com",
      link: "mailto:evidence@thenexusinitiative.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 XXX XXX XXXX",
      link: "tel:+234XXXXXXXXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Anambra State, Nigeria",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      handle: "@ezenwukwe evidence",
      link: "https://instagram.com/ezenwukwe evidence",
      color: "hover:text-pink-500"
    },
    {
      icon: Twitter,
      label: "X",
      handle: "@okwunnaevidence",
      link: "https://twitter.com/okwunnaevidence",
      color: "hover:text-blue-400"
    },
    {
      icon: Video,
      label: "TikTok",
      handle: "@evidenceezenwukwe",
      link: "https://tiktok.com/@evidenceezenwukwe",
      color: "hover:text-gray-300"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate, learn, or discuss how we can build Africa's future together? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                    <p className="text-muted-foreground">
                      Whether it's a collaboration opportunity, a question about my work, 
                      or just to say hello — I'm here.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your idea, question, or how we can work together..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="btn-hero w-full group" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" />
                          Send Message
                          <Mail className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Information */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-muted-foreground text-sm">
                            {info.label}
                          </div>
                          <div className="font-semibold">{info.value}</div>
                        </div>
                      </div>
                    );

                    return info.link ? (
                      <a key={index} href={info.link} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Follow My Journey</h3>
                <p className="text-muted-foreground mb-6">
                  Stay updated with my latest projects, insights, and the progress 
                  of The Nexus Initiative across social platforms.
                </p>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 group ${social.color}`}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{social.label}</div>
                          <div className="text-sm text-muted-foreground">
                            {social.handle}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12 text-center space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Newsletter
                </Badge>
                <h3 className="text-3xl font-bold">Stay in the Loop</h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get exclusive updates on new projects, e-books, courses, and insights 
                  on building Africa's future through education and entrepreneurship.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button className="btn-hero">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                No spam, unsubscribe at any time. Your email is safe with us.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;