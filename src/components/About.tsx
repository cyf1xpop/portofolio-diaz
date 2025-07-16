import { Code, Palette, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern technologies."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency across all devices."
    },
    {
      icon: Heart,
      title: "User-Centered",
      description: "Building solutions that solve real problems and improve user experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital experiences 
            that combine beautiful design with powerful functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Personal story */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started as a self-taught developer with a curiosity for how things work. 
              Over the years, I've evolved into a full-stack developer who loves the 
              intersection of design and technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or enjoying a good cup of coffee while sketching 
              out new ideas.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Creative Thinker
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Team Player
              </span>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            {highlights.map((item, index) => (
              <Card key={index} className="card-gradient shadow-card hover-lift group">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">20+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">100%</div>
            <div className="text-muted-foreground">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;