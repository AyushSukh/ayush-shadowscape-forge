import { Code, Database, Brain, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "250+ DSA Problems",
      description: "Mastered algorithmic thinking with precision and efficiency",
      color: "text-primary"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building scalable data pipelines and intelligent workflows",
      color: "text-secondary"
    },
    {
      icon: Brain,
      title: "LLM & AI",
      description: "Developing cutting-edge AI solutions with LangChain & LangGraph",
      color: "text-accent"
    },
    {
      icon: Target,
      title: "GDSC Coordinator",
      description: "Leading technical communities and driving innovation",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-muted-foreground">ABOUT</span>{' '}
            <span className="neon-text">ME</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="glass-intense p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                The Digital Architect
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Computer Science undergraduate with an insatiable passion for 
                  <span className="text-primary font-medium"> Data Engineering</span> and 
                  <span className="text-secondary font-medium"> Artificial Intelligence</span>. 
                  Currently interning at Jio Platforms, I'm at the forefront of building 
                  intelligent LLM workflows that shape the future of technology.
                </p>
                <p>
                  My journey is driven by precision, deep work, and a relentless pursuit 
                  of innovative solutions. From developing AI-powered trading bots to 
                  architecting recommendation systems, I transform complex problems 
                  into elegant, scalable solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me solving algorithmic puzzles, 
                  coordinating tech communities, or exploring the latest advances in 
                  machine learning and distributed systems.
                </p>
              </div>
            </div>
            
            {/* Philosophy */}
            <div className="glass p-6 rounded-xl border-l-4 border-primary">
              <blockquote className="text-lg font-space italic text-foreground">
                "Code is poetry written in logic. Every algorithm tells a story, 
                and every data structure holds infinite possibilities."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">— My Engineering Philosophy</cite>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass p-6 rounded-xl hover-glow group cursor-pointer transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full bg-background/50 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-orbitron font-bold text-lg text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-orbitron font-bold mb-8 text-muted-foreground">
            CORE TECHNOLOGIES
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'C++', 'JavaScript', 'SQL', 'FastAPI', 
              'PostgreSQL', 'LangChain', 'Pandas', 'NumPy', 'React'
            ].map((tech, index) => (
              <span
                key={tech}
                className="glass px-4 py-2 rounded-full text-sm font-space hover-glow cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;