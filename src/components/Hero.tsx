import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Engineering Intelligence. Shaping the Future.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      
      {/* Elegant Live Background */}
      <div className="elegant-bg" />
      
      {/* Elegant Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Name */}
        <div className="mb-8 slide-up">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-4">
            <span className="text-foreground">AYUSH</span>
            <br />
            <span className="elegant-text pulse-elegant">SUKHWAL</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-6" />
        </div>

        {/* Typing Effect Tagline */}
        <div className="mb-8 slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl md:text-4xl font-space font-light text-muted-foreground min-h-[3rem]">
            {text}
            <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
              |
            </span>
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12 slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Computer Science Undergraduate • Data Engineering Aspirant • ML/AI Innovator
            <br />
            Currently shaping the future of intelligent systems at <span className="text-primary font-medium">Jio Platforms</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 slide-up" style={{ animationDelay: '0.9s' }}>
          <Button 
            size="lg" 
            className="glass luxury-border hover-glow font-orbitron px-8 py-4 text-lg group"
          >
            VIEW MY WORK
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="glass border-glass-border hover:border-secondary hover-glow font-space px-8 py-4 text-lg"
          >
            DOWNLOAD RESUME
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 slide-up" style={{ animationDelay: '1.2s' }}>
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="glass p-4 rounded-full hover-glow group transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 slide-up" style={{ animationDelay: '1.5s' }}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-space tracking-wider">SCROLL</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;