import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ayush.sukhwal@example.com',
      href: 'mailto:ayush.sukhwal@example.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: '#'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXX XXX XXXX',
      href: 'tel:+91XXXXXXXXXX'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ayushsukhwal',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ayushsukhwal',
      color: 'hover:text-secondary'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/ayushsukhwal',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-dark relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-muted-foreground">GET IN</span>{' '}
            <span className="neon-text">TOUCH</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on the next big innovation? Let's turn ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-intense p-8 rounded-2xl">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-foreground">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass border-glass-border focus:border-primary bg-background/50"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass border-glass-border focus:border-primary bg-background/50"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="glass border-glass-border focus:border-primary bg-background/50 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-glow neon-border font-orbitron"
              >
                <Send className="w-4 h-4 mr-2" />
                SEND MESSAGE
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-intense p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 glass rounded-xl hover-glow transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-space">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-intense p-8 rounded-2xl">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-foreground">
                Follow Me
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass p-4 rounded-xl hover-glow transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-intense p-8 rounded-2xl">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-foreground">
                Current Status
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="text-muted-foreground">
                  Available for new opportunities
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Actively seeking Data Engineering roles and exciting collaboration opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass p-6 rounded-xl max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              Prefer a direct approach?
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 transition-transform font-orbitron"
            >
              <Mail className="w-4 h-4 mr-2" />
              ayush.sukhwal@example.com
            </Button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Contact;