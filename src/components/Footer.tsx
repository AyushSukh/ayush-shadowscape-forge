import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ayushsukhwal',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ayushsukhwal',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:ayush.sukhwal@example.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="py-16 px-6 bg-background border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-orbitron font-black mb-3">
              <span className="text-primary">AYUSH</span>{' '}
              <span className="text-foreground">SUKHWAL</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Engineering Intelligence. Shaping the Future.
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover-glow transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-4 h-4 text-primary" /> by Ayush Sukhwal
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-glass-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            "The best way to predict the future is to invent it." - Alan Kay
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;